const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();

const list = async (data) => {
    const { brand_id, searchString } = data;
    const or = searchString ? { model_name: { contains: searchString } } : {}
    let status = 200;
    let response = {};
    await prisma.generatorModels.findMany({
        orderBy: {
            id: 'desc'
        },
        where: {
            brand_id: brand_id,
            is_deleted: 0,
            ...or
        }
    }).then(result => {
        response = {status: status, msg: "Fetched generator models.", data: result};
    });
    return response;
}

const store = async (data) => {
    let status = 200;
    let response = {};
    const { brand_id, model_name } = data;
    await prisma.generatorModels.findFirst({ where: { model_name: data.model_name, brand_id: data.brand_id } }).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.generatorModels.create({
                    data: {
                        brand_id: data.brand_id,
                        model_name: data.model_name
                    }
                }).then(result => {
                    response = {status: status, msg: "New model added successfully.", data: result};
                    resolve(response);
                }).catch(error => {
                    response = {status: 400, msg: "An error occured."};
                    reject(response);
                });
            });
            return promiseResult;
        }
        else{
            response = {status: 400, msg: "Sorry! the model of this brand is already exist."};
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
    });
    return response;  
}

const update = async (data) => {
    let status = 200;
    let response = {};
    await prisma.generatorModels.findFirst({ where: { model_name: data.model_name, brand_id: data.brand_id, NOT: { id: data.model_id } }}).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.generatorModels.update({
                    where: {
                        id: data.model_id
                    },
                    data: {
                        brand_id: data.brand_id,
                        model_name: data.model_name
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
            response = {status: 400, msg: "Sorry! the model of this brand is already exist."};
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
    });
    return response;
}

const remove_record = async (data) => {
    let status = 200;
    let response = {};
    await prisma.generatorModels.update({
        where: {
            id: data.model_id
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