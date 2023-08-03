const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();
const helper = require("../helpers/config");

const list = async (data) => {
    const perPage = 10;
    const pageNo = data.page_no;
    const offSet = helper.getOffset(pageNo);
    const searchTitle = data.searchTitle ? { title: { contains: data.searchTitle } } : {}
    const searchDescription = data.searchDescription ? { description: { contains: data.searchDescription } } : {}
    let status = 200;
    let response = {};
    const total_record = await prisma.permissions.count({
        where: {
            is_deleted: 0,
            ...searchTitle,
            ...searchDescription
        }
    });
    const total_page_number = Math.ceil(total_record/perPage);
    if(total_record > 0){
        await prisma.permissions.findMany({
            skip: offSet,
            take: perPage,
            orderBy: {
                id: 'desc'
            },
            where: {
                is_deleted: 0,
                ...searchTitle,
                ...searchDescription
            }
        }).then(result => {
            response = {status: status, msg: "Fetched permission list.", data: result, total_page: total_page_number, total_record: total_record};
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
    
    await prisma.permissions.findFirst({ where: {title: data.title, is_deleted: 0} }).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.permissions.create({
                    data: {
                        title: data.title,
                        description: data.description
                    }
                }).then(result => {
                    response = {status: status, msg: "New permission added successfully.", data: result};
                    resolve(response);
                }).catch(error => {
                    response = {status: 400, msg: "An error occured."};
                    reject(response);
                });
            });
            return promiseResult;
        }
        else{
            response = {status: 400, msg: "Sorry! the permission is already exist."};
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
    });
    return response;  
}

const update = async (data) => {
    let status = 200;
    let response = {};
    await prisma.permissions.findFirst({ where: { title: data.title, is_deleted: 0, NOT: { id: data.permission_id } }}).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.permissions.update({
                    where: {
                        id: data.permission_id
                    },
                    data: {
                        title: data.title,
                        description: data.description
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
            response = {status: 400, msg: "Sorry! the permission is already exist."};
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
    });
    return response;
}

const remove_record = async (data) => {
    let status = 200;
    let response = {};
    await prisma.permissions.update({
        where: {
            id: data.permission_id
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