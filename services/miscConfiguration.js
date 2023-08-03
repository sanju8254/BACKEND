const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();

const list = async (data) => {
    const searchName = data.searchName ? { name: { contains: data.searchName } } : {}
    const searchDescription = data.searchDescription ? { description: { contains: data.searchDescription } } : {}
    let status = 200;
    let response = {};
    await prisma.miscConfiguration.findMany({
        where: {
            is_deleted: 0,
            ...searchName,
            ...searchDescription
        }
    }).then(result => {
        response = { status: status, msg: "Fetched misc. configuration list.", data: result };
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const logging_details = async (data) => {
    const searchTitle = data.searchTitle ? { name: { contains: data.searchTitle } } : {}
    const searchDescription = data.searchDescription ? { description: { contains: data.searchDescription } } : {}
    let status = 200;
    let response = {};
    await prisma.loggingDetails.findMany({
        where: {
            is_deleted: 0,
            ...searchTitle,
            ...searchDescription
        }
    }).then(result => {
        response = { status: status, msg: "Fetched logging details list.", data: result };
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const update_logging_details = async (data) => {
    let response = {};
    var promiseResult = new Promise(function (resolve, reject) {
        prisma.loggingDetails.update({
            where: {
                id: data.log_id
            },
            data: {
                configuare_value: data.configuare_value,
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

const smtp_details = async () => {
    let response = {};
    await prisma.smtpDetails.findFirst({}).then(result => {
        response = { status: 200, msg: "SMTP Details", data: result }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const update_smtp_details = async (data) => {
    let response = {};
    await prisma.smtpDetails.update({
        where: {
            id: data.id
        },
        data: {
            host_name: data.host_name,
            port_no: data.port_no,
            user_name: data.user_name,
            password: data.password,
            encryption_type: data.encryption_type,
            sent_from: data.sent_from
        }
    }).then(result => {
        response = { status: 200, msg: "SMTP Details updated successfully.", data: result }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

module.exports = {
    list,
    logging_details,
    update_logging_details,
    smtp_details,
    update_smtp_details
}