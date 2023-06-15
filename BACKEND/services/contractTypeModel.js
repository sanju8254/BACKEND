const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();

const list = async (data) => {
    const { searchString } = data;
    const or = searchString ? { type_name: { contains: searchString } } : {}
    let status = 200;
    let response = {};
    await prisma.contract_types.findMany({
        orderBy: {
            id: 'desc'
        },
        where: {
            is_deleted: 0,
            ...or
        }
    }).then(result => {
        response = {status: status, msg: "Fetched contact type list.", data: result};
    }).catch(error => {
		response = {status: 400, msg: "An error occured."};
	});
    return response;
}

const store = async (data) => {
    let status = 200;
    let response = {};
    const { type_name } = data;
    await prisma.contract_types.findFirst({ where: {type_name: type_name} }).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.contract_types.create({
                    data: {
                        type_name
                    }
                }).then(result => {
                    response = {status: status, msg: "Contract type added successfully.", data: result};
                    resolve(response);
                }).catch(error => {
                    response = {status: 400, msg: "An error occured."};
                    reject(response);
                });
            });
            return promiseResult;
        }
        else{
            response = {status: 400, msg: "Sorry! the contract type is already exist."};
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
    });
    return response;  
}

const update = async (data) => {
    let status = 200;
    let response = {};
    await prisma.contract_types.findFirst({ where: { type_name: data.type_name, NOT: { id: data.type_id } }}).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.contract_types.update({
                    where: {
                        id: data.type_id
                    },
                    data: {
                        type_name: data.type_name
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
    await prisma.contract_types.update({
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