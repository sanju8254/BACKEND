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
    const searchCustomerType = data.searchCustomerType ? { contact_name: { contains: data.searchCustomerType } } : {}

    let status = 200;
    let response = {};

    const total_record = await prisma.customerDetails.count({
        where: {
            is_deleted: 0,
            ...searchName,
            ...searchAdress,
            ...searchCustomerType
        }

    });
    const total_page_number = Math.ceil(total_record / perPage);
    if (total_record > 0) {
        await prisma.customerDetails.findMany({
            skip: offSet,
            take: perPage,
            orderBy: {
                id: 'desc'
            },
            where: {
                is_deleted: 0,
                ...searchName,
                ...searchAdress,
                ...searchCustomerType
            },
            include: {
                customertype: {
                    select: {
                        type_name: true
                    }
                }
            }
        }).then(result => {
            response = { status: status, msg: "Fetched customer Details list.", data: result, total_page: total_page_number, total_record: total_record };
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
    const { company_name, customer_type } = data;
    await prisma.customerDetails.findFirst({ where: { company_name: company_name, customer_type_id: customer_type, is_deleted: 0 } }).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.customerDetails.create({
                    data: {
                        company_name: data.company_name,
                        customer_type_id: data.customer_type,
                        physical_address: data.physical_address,
                        billing_address: data.billing_address,
                        created_by: authUser.id
                    }
                }).then(result => {
                    response = { status: status, msg: "New Company added successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: "An error occured." };
                    reject(response);
                });
            });
            return promiseResult;
        }
        else {
            response = { status: 400, msg: "Sorry! the Company Name is already exist." };
        }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const update=async(data,authUser)=>{
    let status = 200;
    let response = {};
    const {company_name,customer_type}=data;
    await prisma.customerDetails.findFirst({ where: { company_name: company_name, customer_type_id: customer_type, is_deleted: 0 } }).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.customerDetails.update({
                    where: {
                        id: data.customer_details_id
                    },
                    data: {
                        company_name: data.company_name,
                        customer_type_id: data.customer_type,
                        physical_address: data.physical_address,
                        billing_address: data.billing_address,
                        created_by: authUser.id
                    }                    
                 
                }).then(result => {
                    response = { status: status, msg: "Company Details Updated successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: "An error occured." };
                    reject(response);
                });
            });
            return promiseResult;
        }
        else {
            response = { status: 400, msg: "Sorry! the Company Name is already exist." };
        }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const remove_record = async (data,authUser) => {
    let status = 200;
    let response = {};
    await prisma.customerDetails.update({
        where: {
            id: data.customer_details_id
        },
        data: {
            is_deleted: 1,
            created_by: authUser.id
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