const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();
const helper = require("../helpers/config");

const list = async (data) => {
    const perPage = 10;
    const pageNo = data.page_no;
    const offSet = helper.getOffset(pageNo);
    const searchStatusName = data.searchStatusName ? { status_name: { contains: data.searchStatusName } } : {}
    const searchDescriptionName = data.searchDescriptionName ? { description: { contains: data.searchDescriptionName } } : {}
    const searchAppliesTo = data.searchAppliesTo ? { applies_to: data.searchAppliesTo } : {}
    let status = 200;
    let response = {};
    const total_record = await prisma.workOrderStatus.count({
        where: {
            is_deleted: 0,
            ...searchStatusName,
            ...searchDescriptionName,
            ...searchAppliesTo
        }
    });
    const total_page_number = Math.ceil(total_record / perPage);
    if (total_record > 0) {
        await prisma.workOrderStatus.findMany({
            skip: offSet,
            take: perPage,
            orderBy: {
                id: 'desc'
            },
            where: {
                is_deleted: 0,
                ...searchStatusName,
                ...searchDescriptionName,
                ...searchAppliesTo
            }
        }).then(result => {
            response = { status: status, msg: "Fetched work order status list.", data: result, total_page: total_page_number, total_record: total_record };
        }).catch(error => {
            response = { status: 400, msg: "An error occured." };
        });
    } else {
        response = { status: status, msg: "No record found.", data: [], total_record: total_page_number, total_record: total_record };
    }
    return response;
}

const store = async (data) => {
    let status = 200;
    let response = {};

    await prisma.workOrderStatus.findFirst({ where: { status_name: data.status_name, is_deleted: 0 } }).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.workOrderStatus.create({
                    data: {
                        status_name: data.status_name,
                        color_code: data.color_code,
                        description: data.description,
                        applies_to: data.applies_to
                    }
                }).then(result => {
                    response = { status: status, msg: "Work order status added successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: "An error occured." };
                    reject(response);
                });
            });
            return promiseResult;
        }
        else {
            response = { status: 400, msg: "Sorry! the status is already exist." };
        }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const update = async (data) => {
    let status = 200;
    let response = {};
    await prisma.workOrderStatus.findFirst({ where: { status_name: data.status_name, is_deleted: 0, NOT: { id: data.status_id } } }).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.workOrderStatus.update({
                    where: {
                        id: data.status_id
                    },
                    data: {
                        status_name: data.status_name,
                        color_code: data.color_code,
                        description: data.description,
                        applies_to: data.applies_to
                    }
                }).then(result => {
                    response = { status: 200, msg: "Record updated successfully." };
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
    await prisma.workOrderStatus.update({
        where: {
            id: data.status_id
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