const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();

const list = async () => {
    let status = 200;
    let response = {};
    await prisma.reminderThresoldDays.findFirst({}).then(result => {
        response = { status: status, msg: "Fetched reminder thresold details.", data: result };
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

const store = async (data) => {
    let status = 200;
    let response = {};
    await prisma.reminderThresoldDays.findFirst({}).then(duplicate => {
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.reminderThresoldDays.create({
                    data: {
                        thresold_day: data.thresold_day
                    },
                }).then(result => {
                    response = { status: status, msg: "Thresold reminder value saved successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: "An error occured." };
                    reject(response);
                });
            });
            return promiseResult;
        }
        else {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.reminderThresoldDays.update({
                    where: {
                        id: duplicate.id
                    },
                    data: {
                        thresold_day: data.thresold_day
                    },
                }).then(result => {
                    response = { status: status, msg: "Thresold reminder value saved successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: "An error occured." };
                    reject(response);
                });
            });
            return promiseResult;
        }
    }).catch(error => {
        response = { status: 400, msg: "An error occured." };
    });
    return response;
}

module.exports = {
    list,
    store
}