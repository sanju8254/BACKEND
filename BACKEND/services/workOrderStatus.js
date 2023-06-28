const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();

const list = async (data) => {
    const searchStatusName = data.searchStatusName ? { status_name: { contains: data.searchStatusName } } : {}
    const searchDescriptionName = data.searchDescriptionName ? { description: { contains: data.searchDescriptionName } } : {}
    const searchAppliesTo = data.searchAppliesTo ? { applies_to: data.searchAppliesTo } : {}
    let status = 200;
    let response = {};
    await prisma.workOrderStatus.findMany({
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
        response = {status: status, msg: "Fetched work order status list.", data: result};
    }).catch(error => {
		response = {status: 400, msg: "An error occured."};
	});
    return response;
}

const store = async (data) => {
    let status = 200;
    let response = {};
    
    await prisma.workOrderStatus.findFirst({ where: {status_name: data.status_name, is_deleted: 0} }).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.workOrderStatus.create({
                    data: {
                        status_name: data.status_name,
                        color_code: data.color_code,
                        description: data.description,
                        applies_to: data.applies_to
                    }
                }).then(result => {
                    response = {status: status, msg: "Work order status added successfully.", data: result};
                    resolve(response);
                }).catch(error => {
                    response = {status: 400, msg: "An error occured."};
                    reject(response);
                });
            });
            return promiseResult;
        }
        else{
            response = {status: 400, msg: "Sorry! the status is already exist."};
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
    });
    return response;  
}

const update = async (data) => {
    let status = 200;
    let response = {};
    await prisma.workOrderStatus.findFirst({ where: { status_name: data.status_name, is_deleted: 0, NOT: { id: data.status_id } }}).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
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
                    response = {status: 200, msg: "Record updated successfully."};
                    resolve(response);
                }).catch(error => {
                    response = {status: 400, msg: "An error occured."};
                    reject(response);
                });
            });
            return promiseResult;
        }
        else{
            response = {status: 400, msg: "Sorry! the customer type is already exist."};
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
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