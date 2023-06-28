const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();

const list = async () => {
    let status = 200;
    let response = {};
    await prisma.blackOutDayTypes.findMany({
        orderBy: {
            id: 'desc'
        },
        where: {
            is_deleted: 0
        }
    }).then(result => {
        response = {status: status, msg: "Fetched blackout day type list.", data: result};
    }).catch(error => {
		response = {status: 400, msg: "An error occured."};
	});
    return response;
}

const store = async (data) => {
    let status = 200;
    let response = {};
    const { type } = data;
    await prisma.blackOutDayTypes.findFirst({ where: {type: type, is_deleted: 0} }).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.blackOutDayTypes.create({
                    data: {
                        type
                    }
                }).then(result => {
                    response = {status: status, msg: "Blackout data type added successfully.", data: result};
                    resolve(response);
                }).catch(error => {
                    response = {status: 400, msg: "An error occured."};
                    reject(response);
                });
            });
            return promiseResult;
        }
        else{
            response = {status: 400, msg: "Sorry! this day type is already exist."};
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
    });
    return response;  
}

const update = async (data) => {
    let status = 200;
    let response = {};
    await prisma.blackOutDayTypes.findFirst({ where: { type: data.type, is_deleted: 0, NOT: { id: data.type_id } }}).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.blackOutDayTypes.update({
                    where: {
                        id: data.type_id
                    },
                    data: {
                        type: data.type
                    }
                }).then(result => {
                    response = {status: 200, msg: "Record updated successfully.", data: result};
                    resolve(response);
                }).catch(error => {
                    response = {status: 400, msg: "An error occured."};
                    reject(response);
                });
            });
            return promiseResult;
        }
        else{
            response = {status: 400, msg: "Sorry! this day type is already exist."};
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
    });
    return response;
}

const remove_record = async (data) => {
    let status = 200;
    let response = {};
    await prisma.blackOutDayTypes.update({
        where: {
            id: data.type_id
        },
        data: {
            is_deleted: 1
        }
    }).then(result => {
        response = {status: 200, msg: "Record removed successfully."};
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
    });
    return response;
}

module.exports = {
    list,
    store,
    update,
    remove_record
}