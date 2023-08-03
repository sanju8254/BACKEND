const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();
const helper = require("../helpers/config");

const list = async (data) => {
    const perPage = 10;
    const pageNo = data.page_no;
    const offSet = helper.getOffset(pageNo);

    const searchOrderType = data.searchOrderType ? { order_type: { contains: data.searchOrderType } } : {}
    let status = 200;
    let response = {};
    const total_record = await prisma.workOrderTypes.count({
        where: {
            is_deleted: 0,
            ...searchOrderType
        }
    });
    const total_page_number = Math.ceil(total_record / perPage);
    if (total_record > 0) {
        await prisma.workOrderTypes.findMany({
            skip: offSet,
            take: perPage,
            orderBy: {
                id: 'desc'
            },
            where: {
                is_deleted: 0,
                ...searchOrderType
            }
        }).then(result => {
            response = { status: status, msg: "Fetched work order type list.", data: result, total_page: total_page_number, total_record: total_record };
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

    await prisma.workOrderTypes.findFirst({ where: { order_type: data.order_type, is_deleted: 0 } }).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.workOrderTypes.create({
                    data: {
                        order_type: data.order_type,
                        on_screen_color_code: data.on_screen_color_code,
                        on_report_color_code: data.on_report_color_code
                    }
                }).then(result => {
                    response = { status: status, msg: "Work order type added successfully.", data: result };
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
    await prisma.workOrderTypes.findFirst({ where: { order_type: data.order_type, is_deleted: 0, NOT: { id: data.type_id } } }).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.workOrderTypes.update({
                    where: {
                        id: data.type_id
                    },
                    data: {
                        order_type: data.order_type,
                        on_screen_color_code: data.on_screen_color_code,
                        on_report_color_code: data.on_report_color_code
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
    await prisma.workOrderTypes.update({
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