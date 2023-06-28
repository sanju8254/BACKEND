const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();
const helper = require("../helpers/config");

const list = async (data) => {
    const perPage = 10;
    const pageNo = data.page_no;
    const offSet = helper.getOffset(pageNo);
    
    const or = data.searchString ? { model_name: { contains: data.searchString } } : {}
    let status = 200;
    let response = {};
    const total_record = await prisma.generatorModels.count({
        where: {
            brand_id: data.brand_id,
            is_deleted: 0,
            ...or
        }
    });
    const total_page_number = Math.ceil(total_record/perPage);
    if(total_record > 0){
        await prisma.generatorModels.findMany({
            skip: offSet,
            take: perPage,
            orderBy: {
                id: 'desc'
            },
            where: {
                brand_id: data.brand_id,
                is_deleted: 0,
                ...or
            }
        }).then(result => {
            response = {status: status, msg: "Fetched generator models.", data: result, total_page: total_page_number, total_record: total_record};
        }).catch(error => {
            response = {status: 400, msg: "An error occured."};
        });
    }
    else{
        response = {status: status, msg: "No record found.", data: [], total_record: total_page_number, total_record: total_record};
    }
    return response;
}

const store = async (data) => {
    let status = 200;
    let response = {};
    const { brand_id, model_name } = data;
    await prisma.generatorModels.findFirst({ where: { model_name: data.model_name, brand_id: data.brand_id, is_deleted: 0 } }).then(duplicate => {
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
    await prisma.generatorModels.findFirst({ where: { model_name: data.model_name, brand_id: data.brand_id, is_deleted: 0, NOT: { id: data.model_id } }}).then(duplicate => {
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