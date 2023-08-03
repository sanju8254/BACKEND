const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();
const helper = require("../helpers/config");
const bcrypt = require('bcryptjs');

const list = async (data) => {
    const perPage = 10;
    const pageNo = data.page_no;
    const offSet = helper.getOffset(pageNo);

    const searchName = data.searchName ? { name: { contains: data.searchName } } : {}
    const searchAdress = data.searchAdress ? { address: { contains: data.searchAdress } } : {}
    const searchPrimaryContact = data.searchPrimaryContact ? { contact_name: { contains: data.searchPrimaryContact } } : {}
    const searchPrimaryContactNo = data.searchPrimaryContactNo ? { contact: { contains: data.searchPrimaryContactNo } } : {}
    const searchCustomerType = data.searchCustomerType ? { customer_type_id: data.searchCustomerType } : {} //integer
    let status = 200;
    let response = {};

    const total_record = await prisma.users.count({
        where: {
            is_deleted: 0,
            user_type: 1,
            ...searchName,
            ...searchAdress,
            ...searchPrimaryContact,
            ...searchPrimaryContactNo,
            ...searchCustomerType
        }

    });
    const total_page_number = Math.ceil(total_record / perPage);
    if (total_record > 0) {
        await prisma.users.findMany({
            skip: offSet,
            take: perPage,
            orderBy: {
                id: 'desc'
            },
            where: {
                is_deleted: 0,
                user_type: 1,
                ...searchName,
                ...searchAdress,
                ...searchPrimaryContact,
                ...searchPrimaryContactNo,
                ...searchCustomerType
            },
            include: {
                customer_type: {
                    select: {
                        type_name: true
                    }
                }
            }
        }).then(result => {
            response = { status: status, msg: "Fetched customer list.", data: result, total_page: total_page_number, total_record: total_record };
        }).catch(error => {
            console.log(error);
            response = { status: 400, msg: "An error occured." };
        });
    }
    else {
        response = { status: status, msg: "No record found.", data: [], total_page: total_page_number, total_record: total_record };
    }

    return response;
}

const store = async (data, authUser) => {
    let status = 200;
    let response = {};
    let contact_name = data.first_name ? data.first_name : "";
    contact_name += data.last_name ? " " + data.last_name : "";

    if (data.email) {
        await prisma.customerContracts.findFirst({ where: { primary_email: data.email, is_deleted: 0 } }).then(duplicate => {
            var promiseResult = new Promise(function (resolve, reject) {
                console.log({ duplicate });
                if (duplicate == null) {
                    const password = helper.autoGenerateString(8);
                    bcrypt.hash(password, 10, async (err, hash) => {
                        if (err) {
                            response = { status: 400, msg: "An error occured.", data: error };
                            reject(response);
                        }
                        else {
                            prisma.users.create({
                                data: {
                                    name: data.name,
                                    customer_type_id: data.customer_type_id,
                                    address: data.physical_address,
                                    billing_address: data.billing_address,
                                    contact_name: contact_name,
                                    contact: data.contact,
                                    user_type: 1,
                                    email: data.email,
                                    password: hash,
                                    created_by: authUser.id
                                }
                            }).then(result => {
                                prisma.customerContracts.create({
                                    data: {
                                        customer_id: result.id,
                                        first_name: data.first_name,
                                        last_name: data.last_name,
                                        primary_email: data.email,
                                        mobile: data.contact,
                                        is_primary: 1,
                                        created_by: authUser.id
                                    }
                                }).then(contactResult => {
                                    response = { status: status, msg: "Customer added successfully.", data: result };
                                    resolve(response);
                                }).catch(error => {
                                    reject(error);
                                });
                            }).catch(error => {
                                reject(error);
                            });
                        }
                    });
                }
                else {
                    response = { status: 400, msg: "Email id already exist." };
                    resolve(response);
                }
            });
            console.log({ promiseResult });
            return promiseResult;
        });
    }
    else {
        prisma.users.create({
            data: {
                name: data.name,
                customer_type_id: data.customer_type_id,
                address: data.physical_address,
                billing_address: data.billing_address,
                user_type: 1,
                created_by: authUser.id
            }
        }).then(result => {
            response = { status: status, msg: "Customer added successfully.", data: result };
            return response;
        }).catch(error => {
            response = { status: 400, msg: "An error occured.", data: error };
            return response;
        });
    }
    return response;
}

const update = async (data) => {
    let status = 200;
    let response = {};
    await prisma.blackOutDays.findFirst({ where: { title: data.title, is_deleted: 0, NOT: { id: data.id } } }).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.blackOutDays.update({
                    where: {
                        id: data.id
                    },
                    data: {
                        day_type_id: data.day_type_id,
                        title: data.title,
                        start_date: new Date(data.start_date),
                        end_date: new Date(data.end_date),
                        applies_to: data.applies_to,
                        color_code: data.color_code
                    }
                }).then(result => {
                    response = { status: status, msg: "Record updated successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: "An error occured." };
                    reject(response);
                });
            });
            return promiseResult;
        }
        else {
            response = { status: 400, msg: "Sorry! this day is already exist." };
        }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const remove_record = async (data) => {
    let status = 200;
    let response = {};
    await prisma.blackOutDays.update({
        where: {
            id: data.id
        },
        data: {
            is_deleted: 1
        }
    }).then(result => {
        response = { status: status, msg: "Record removed successfully." };
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

module.exports = {
    list,
    store,
    update,
    remove_record
}