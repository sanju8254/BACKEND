const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();
const helper = require("../helpers/config");

const list = async (data) => {
    const perPage = 10;
    const pageNo = data.page_no;
    const offSet = helper.getOffset(pageNo);

    const searchDayType = data.dayType ? { blackout_day_type: {type: { contains: data.dayType } } } : {}
    const searchTitle = data.searchTitle ? { title: { contains: data.searchTitle } } : {}
    const searchStartDate = data.startDate && data.endDate ? { start_date: { gte: new Date(data.startDate) } } : {}
    const searchEndDate = data.startDate && data.endDate ? { end_date: { lte: new Date(data.endDate) } } : {}
    const searchAppliesTo = data.searchAppliesTo ? { applies_to: data.searchAppliesTo } : {}
    let status = 200;
    let response = {};

    const total_record = await prisma.blackOutDays.count({
        where: {
            is_deleted: 0,
            ...searchTitle,
            ...searchAppliesTo,
            ...searchStartDate,
            ...searchEndDate,
            ...searchDayType
        }
        
    });
    const total_page_number = Math.ceil(total_record / perPage);
    if (total_record > 0) {
        await prisma.blackOutDays.findMany({
            skip: offSet,
            take: perPage,
            orderBy: {
                id: 'desc'
            },
            where: {
                is_deleted: 0,
                ...searchTitle,
                ...searchAppliesTo,
                ...searchStartDate,
                ...searchEndDate,
                ...searchDayType
            },
            include: { 
                blackout_day_type: { 
                    select: { 
                        type: true 
                    } 
                } 
            }
        }).then(result => {
            response = { status: status, msg: "Fetched blackout day list.", data: result, total_page: total_page_number, total_record: total_record };
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
    await prisma.blackOutDays.findFirst({ where: { title: data.title, is_deleted: 0 } }).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.blackOutDays.create({
                    data: {
                        day_type_id: data.day_type_id,
                        title: data.title,
                        start_date: new Date(data.start_date),
                        end_date: new Date(data.end_date),
                        applies_to: data.applies_to,
                        color_code: data.color_code
                    }
                }).then(result => {
                    response = { status: status, msg: "Blackout day added successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: "An error occured.", data: error };
                    reject(response);
                });
            });
            return promiseResult;
        }
        else {
            response = { status: 400, msg: "Sorry! this day is already exist." };
        }
    }).catch(error => {
        response = { status: 400, msg: "An error occured.", data: error };
    });
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