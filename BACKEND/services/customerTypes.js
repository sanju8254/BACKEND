const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();
const helper = require("../helpers/config");

const list = async (data) => {
    const perPage = 10;
    const pageNo = data.page_no;
    const offSet = helper.getOffset(pageNo, perPage);

    const { searchString } = data;
    const or = searchString ? { type_name: { contains: searchString } } : {}
    let status = 200;
    let response = {};
    const total_record = await prisma.customer_types.count({
        where: {
            is_deleted: 0,
            ...or
        }
    });
    const total_page_number = Math.ceil(total_record / perPage);
    if (total_record > 0) {
        await prisma.customer_types.findMany({
            skip: offSet,
            take: perPage,
            orderBy: {
                id: 'desc'
            },
            where: {
                is_deleted: 0,
                ...or
            }
        }).then(result => {
            response = { status: status, msg: "Fetched customer type list.", data: result, total_page: total_page_number, total_record: total_record };
        }).catch(error => {
            response = { status: 400, msg: "An error occured." };
        });
    }
    else {
        response = { status: status, msg: "No record found.", data: [], total_page: total_page_number, total_record: total_record };
    }
    return response;
}

const store = async (data) => {
    let status = 200;
    let response = {};
    const { type_name } = data
    await prisma.customer_types.findFirst({ where: { type_name: type_name, is_deleted: 0 } }).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.customer_types.create({
                    data: {
                        type_name
                    },
                }).then(result => {
                    response = { status: status, msg: "Customer type added successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: "An error occured." };
                    reject(response);
                });
            });
            return promiseResult;
        }
        else {
            response = { status: 400, msg: "Sorry! the customer type is already exist." };
        }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const update = async (data) => {
    let status = 200;
    let response = {};
    await prisma.customer_types.findFirst({ where: { type_name: data.type_name, is_deleted: 0, NOT: { id: data.type_id } } }).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.customer_types.update({
                    where: {
                        id: data.type_id
                    },
                    data: {
                        type_name: data.type_name
                    }
                }).then(result => {
                    response = { status: 200, msg: "Record updated successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: "An error occured." };
                    reject(response);
                });
            });
            return promiseResult;
        }
        else {
            response = { status: 400, msg: "Sorry! the customer type is already exist." };
        }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const remove_record = async (data) => {
    let status = 200;
    let response = {};
    await prisma.customer_types.update({
        where: {
            id: data.type_id
        },
        data: {
            is_deleted: 1
        }
    }).then(result => {
        response = { status: 200, msg: "Record removed successfully." };
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