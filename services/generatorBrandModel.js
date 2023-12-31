const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();
const helper = require("../helpers/config");
const { response } = require("express");

const all_list = async () => {
    let response = {};
    await prisma.generatorBrands.findMany({
        orderBy: {
            id: 'desc'
        },
        where: {
            is_deleted: 0
        }
    }).then(result => {
        response = {status: 200, msg: "All generator brands.", data: result};
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
    });
    return response;
}

const list = async (data) => {
    const perPage = 10;
    const pageNo = data.page_no;
    const offSet = helper.getOffset(pageNo);
    const or = data.searchString ? { brand_name: { contains: data.searchString } } : {}
    let status = 200;
    let response = {};
    const total_record = await prisma.generatorBrands.count({
        where: {
            is_deleted: 0,
            ...or
        }
    });
    const total_page_number = Math.ceil(total_record/perPage);
    if(total_record > 0){
        await prisma.generatorBrands.findMany({
            skip: offSet,
            take: perPage,
            orderBy: {
                id: 'desc'
            },
            where: {
                is_deleted: 0,
                ...or
            }
        }).then(result => {
            response = {status: status, msg: "Fetched generator brands.", data: result, total_page: total_page_number, total_record: total_record};
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
    const { brand_name } = data;
    await prisma.generatorBrands.findFirst({ where: {brand_name: brand_name, is_deleted: 0} }).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.generatorBrands.create({
                    data: {
                        brand_name
                    }
                }).then(result => {
                    response = {status: status, msg: "New brand added successfully.", data: result};
                    resolve(response);
                }).catch(error => {
                    response = {status: 400, msg: "An error occured."};
                    reject(response);
                });
            });
            return promiseResult;
        }
        else{
            response = {status: 400, msg: "Sorry! the brand is already exist."};
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
    });
    return response;  
}

const update = async (data) => {
    let status = 200;
    let response = {};
    await prisma.generatorBrands.findFirst({ where: { brand_name: data.brand_name, is_deleted: 0, NOT: { id: data.brand_id } }}).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.generatorBrands.update({
                    where: {
                        id: data.brand_id
                    },
                    data: {
                        brand_name: data.brand_name
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
    await prisma.generatorBrands.update({
        where: {
            id: data.brand_id
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
    all_list,
    list,
    store,
    update,
    remove_record
}