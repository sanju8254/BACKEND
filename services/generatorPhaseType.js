const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();

const list = async (data) => {
    const { searchString } = data;
    const or = searchString ? { phase_type: { contains: searchString } } : {}
    let status = 200;
    let response = {};
    await prisma.generatorPhaseTypes.findMany({
        orderBy: {
            id: 'desc'
        },
        where: {
            is_deleted: 0,
            ...or
        }
    }).then(result => {
        response = {status: status, msg: "Fetched generator phase type list.", data: result};
    }).catch(error => {
		response = {status: 400, msg: "An error occured."};
	});
    return response;
}

const store = async (data) => {
    let status = 200;
    let response = {};
    const { phase_type } = data;
    await prisma.generatorPhaseTypes.findFirst({ where: {phase_type: phase_type, is_deleted: 0} }).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.generatorPhaseTypes.create({
                    data: {
                        phase_type
                    }
                }).then(result => {
                    response = {status: status, msg: "Generator phase type added successfully.", data: result};
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
    await prisma.generatorPhaseTypes.findFirst({ where: { phase_type: data.phase_type, is_deleted: 0, NOT: { id: data.type_id } }}).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.generatorPhaseTypes.update({
                    where: {
                        id: data.type_id
                    },
                    data: {
                        phase_type: data.phase_type
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
    await prisma.generatorPhaseTypes.update({
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