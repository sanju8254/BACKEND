const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();
const helper = require("../helpers/config");

const list = async (data) => {
    const perPage = 10;
    const pageNo = data.page_no;
    const offSet = helper.getOffset(pageNo);
    const searchRole = data.searchRole ? { role: { contains: data.searchRole } } : {}
    const searchDescription = data.searchDescription ? { description: { contains: data.searchDescription } } : {}
    const searchPermission = data.searchPermission ? { appearance: { some: { permission_id: data.searchPermission } } } : {}
    let status = 200;
    let response = {};
    const total_record = await prisma.appearances.count({
        where: {
            is_deleted: 0,
            ...searchRole,
            ...searchDescription,
            ...searchPermission
        }
    });
    const total_page_number = Math.ceil(total_record/perPage);
    if(total_record > 0){
        await prisma.appearances.findMany({
            skip: offSet,
            take: perPage,
            orderBy: {
                id: 'desc'
            },
            where: {
                is_deleted: 0,
                ...searchRole,
                ...searchDescription,
                ...searchPermission
            },
            include: {
                appearance: {
                    include: {
                        permission: {
                            select: {
                                title: true
                            }
                        }
                    }
                }
            }
        }).then(result => {
            response = {status: status, msg: "Fetched roles list.", data: result, total_page: total_page_number, total_record: total_record};
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
    
    await prisma.appearances.findFirst({ where: {role: data.role, is_deleted: 0} }).then(duplicate => {
        if(duplicate == null){
            var promiseResult = new Promise(function(resolve, reject){
                prisma.appearances.create({
                    data: {
                        role: data.role,
                        description: data.description
                    }
                }).then(result => {
                    for (let index = 0; index < data.permissions.length; index++) {
                        const permissionId = data.permissions[index];
                        prisma.appearancePermissions.create({
                            data: {
                                appearance_id: result.id,
                                permission_id: permissionId
                            }
                        }).then(ss => {
                            console.log("added");
                        }).catch(error => {
                            console.log("error");
                        });
                    }
                    response = {status: status, msg: "New role added successfully.", data: result};
                    resolve(response);
                }).catch(error => {
                    response = {status: 400, msg: "An error occured."};
                    reject(response);
                });
            });
            return promiseResult;
        }
        else{
            response = {status: 400, msg: "Sorry! the role is already exist."};
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
    });
    return response;  
}

const update = async (data) => {
    let response = {};
    await prisma.appearances.findFirst({ where: { role: data.role, is_deleted: 0, NOT: { id: data.appearance_id } }}).then(duplicate => {
        if(duplicate == null){
            prisma.appearancePermissions.deleteMany({ where: { appearance_id: data.appearance_id } }).then(removeOld => {
                console.log("Deleted");
            });
            var promiseResult = new Promise(function(resolve, reject){
                prisma.appearances.update({
                    where: {
                        id: data.appearance_id
                    },
                    data: {
                        role: data.role,
                        description: data.description
                    }
                }).then(result => {
                    for (let index = 0; index < data.permissions.length; index++) {
                        const permissionId = data.permissions[index];
                        prisma.appearancePermissions.create({
                            data: {
                                appearance_id: data.appearance_id,
                                permission_id: permissionId
                            }
                        }).then(ss => {
                            console.log("added");
                        }).catch(error => {
                            console.log("error");
                        });
                    }
                    response = {status: 200, msg: "Record updated successfully.", data: result};
                    resolve(response);
                }).catch(error => {
                    response = {status: 400, msg: error};
                    reject(response);
                });
            });
            return promiseResult;
        }
        else{
            response = {status: 400, msg: "Sorry! the permission is already exist."};
        }
    });
    return response;
}

const remove_record = async (data) => {
    let response = {};
    var promiseResult = new Promise(function(resolve, reject){
        prisma.appearancePermissions.deleteMany({
            where: {
                appearance_id: data.appearance_id
            }
        }).then(result => {
            prisma.appearances.delete({
                where: {
                    id: data.appearance_id
                }
            }).then(removeRole => {
                response = {status: 200, msg: "Record removed successfully.", data: removeRole};
                resolve(response);
            }).catch(error => {
                response = {status: 400, msg: error};
                reject(response);
            });
        }).catch(error => {
            response = {status: 400, msg: error};
            reject(response);
        });
    });
    return promiseResult;
}

module.exports = {
    list,
    store,
    update,
    remove_record
}