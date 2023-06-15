const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();

const list = async (data) => {
    const { searchString } = data;
    const or = searchString ? { brand_name: { contains: searchString } } : {}
    let status = 200;
    let response = {};
    await prisma.generatorBrands.findMany({
        orderBy: {
            id: 'desc'
        },
        where: {
            is_deleted: 0,
            ...or
        }
    }).then(result => {
        response = {status: status, msg: "Fetched generator brands.", data: result};
    }).catch(error => {
		response = {status: 400, msg: "An error occured."};
	});
    return response;
}

const store = async (data) => {
    let status = 200;
    let response = {};
    const { brand_name } = data;
    await prisma.generatorBrands.findFirst({ where: {brand_name: brand_name} }).then(duplicate => {
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
    await prisma.generatorBrands.findFirst({ where: { brand_name: data.brand_name, NOT: { id: data.brand_id } }}).then(duplicate => {
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
    list,
    store,
    update,
    remove_record
}