const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();
const helper = require("../helpers/config");

const list = async (data) => {
    const perPage = 10;
    const pageNo = data.page_no;
    const offSet = helper.getOffset(pageNo, perPage);

    const searchTitle = data.searchTitle ? { title: { contains: data.searchTitle } } : {}
    const searchDescription = data.searchDescription ? { description: { contains: data.searchDescription } } : {}
    let status = 200;
    let response = {};
    const total_record = await prisma.customerStatusList.count({
        where: {
            is_deleted: 0,
            ...searchTitle,
            ...searchDescription
        }
    });
    const total_page_number = Math.ceil(total_record / perPage);
    if (total_record > 0) {
        await prisma.customerStatusList.findMany({
            skip: offSet,
            take: perPage,
            orderBy: {
                id: 'desc'
            },
            where: {
                is_deleted: 0,
                ...searchTitle,
                ...searchDescription
            }
        }).then(result => {
            response = { status: status, msg: "Fetched customer note title list.", data: result, total_page: total_page_number, total_record: total_record };
        }).catch(error => {
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

    await prisma.customerStatusList.findFirst({ where: { title: data.title, is_deleted: 0 } }).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.customerStatusList.create({
                    data: {
                        title: data.title,
                        description: data.description,
                        created_by: authUser.id
                    },
                }).then(result => {
                    response = { status: status, msg: "Customer note title added successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: "An error occured." };
                    reject(response);
                });
            });
            return promiseResult;
        }
        else {
            response = { status: 400, msg: "Sorry! this title is already exist." };
        }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const update = async (data, authUser) => {
    let status = 200;
    let response = {};
    await prisma.customerStatusList.findFirst({ where: { title: data.title, is_deleted: 0, NOT: { id: data.title_id } } }).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.customerStatusList.update({
                    where: {
                        id: data.title_id
                    },
                    data: {
                        title: data.title,
                        description: data.description,
                        created_by: authUser.id
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
            response = { status: 400, msg: "Sorry! the title is already exist." };
        }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const remove_record = async (data) => {
    let status = 200;
    let response = {};
    await prisma.customerStatusList.update({
        where: {
            id: data.title_id
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