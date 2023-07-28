const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();

const list = async (data) => {
    const { searchString } = data;
    const or = searchString ? { type_name: { contains: searchString } } : {}
    let status = 200;
    let response = {};
    await prisma.service_levels.findMany({
        orderBy: {
            id: 'desc'
        },
        where: {
            is_deleted: 0,
            ...or
        }
    }).then(result => {
        response = { status: status, msg: "Fetched contact type list.", data: result };
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const store = async (data) => {
    let status = 200;
    let response = {};

    await prisma.service_levels.findFirst({ where: { service_name: data.service_name } }).then(duplicate => {
       
        if (duplicate == null) {
            console.log(duplicate);
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.service_levels.create({
                    data: {
                        service_name: data.service_name,
                        service_limit: data.service_limit,
                        default_load_test_duration: data.default_load_test_duration,
                        on_screen_color_code: data.on_screen_color_code,
                        on_report_color_code: data.on_report_color_code,
                        default_duration: data.default_duration,
                        created_by:data.created_by
                    }
                }).then(result => {
                    response = { status: status, msg: "Service Levels added successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: "An error occured." };
                    reject(response);
                });
            });
            return promiseResult;
        }
        else {
            response = { status: 400, msg: "Sorry! the Service Levels is already exist." };
        }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const update = async (data) => {
    let status = 200;
    let response = {};
    await prisma.service_levels.findFirst({ where: { id: data.id } }).then(duplicate => {
        if (duplicate != null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.service_levels.update({
                    where: {
                        id: data.id
                    },
                    data: {
                        service_name: data.service_name,
                        service_limit: data.service_limit,
                        default_load_test_duration: data.default_load_test_duration,
                        on_screen_color_code: data.on_screen_color_code,
                        on_report_color_code: data.on_report_color_code,
                        default_duration: data.default_duration,
                        created_by:data.created_by
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
            response = { status: 400, msg: "Sorry! the Service levels not exist." };
        }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const remove_record = async (data) => {
    let status = 200;
    let response = {};
    await prisma.service_levels.update({
        where: {
            id: data.id
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