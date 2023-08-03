const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();
const helper = require("../helpers/config");

const list = async (data) => {
    const perPage = 10;
    const pageNo = data.page_no;
    const offSet = helper.getOffset(pageNo);
    const searchGroup = data.searchGroup ? { title: { contains: data.searchGroup } } : {}
    const searchDescription = data.searchDescription ? { description: { contains: data.searchDescription } } : {}
    const searchRoles = data.searchRoles ? { group: { some: { appearance_id: data.searchRoles } } } : {}
    let status = 200;
    let response = {};
    const total_record = await prisma.groups.count({
        where: {
            is_deleted: 0,
            ...searchGroup,
            ...searchDescription,
            ...searchRoles
        }
    });
    const total_page_number = Math.ceil(total_record / perPage);
    if (total_record > 0) {
        await prisma.groups.findMany({
            skip: offSet,
            take: perPage,
            orderBy: {
                id: 'desc'
            },
            where: {
                is_deleted: 0,
                ...searchGroup,
                ...searchDescription,
                ...searchRoles
            },
            include: {
                group: {
                    include: {
                        appearance: {
                            select: {
                                role: true
                            }
                        }
                    }
                }
            }
        }).then(result => {
            response = { status: status, msg: "Fetched group list.", data: result, total_page: total_page_number, total_record: total_record };
        }).catch(error => {
            response = { status: 400, msg: "An error occured." };
        });
    }
    else {
        response = { status: status, msg: "No record found.", data: [], total_record: total_page_number, total_record: total_record };
    }
    return response;
}

const store = async (data) => {
    let status = 200;
    let response = {};

    await prisma.groups.findFirst({ where: { title: data.title, is_deleted: 0 } }).then(duplicate => {
        console.log({duplicate});
        if (duplicate == null) {
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.groups.create({
                    data: {
                        title: data.title,
                        description: data.description
                    }
                }).then(result => {
                    for (let index = 0; index < data.appearances.length; index++) {
                        const appearanceId = data.appearances[index];
                        prisma.groupsAppearance.create({
                            data: {
                                group_id: result.id,
                                appearance_id: appearanceId
                            }
                        }).then(ss => {
                            console.log("added");
                        }).catch(error => {
                            console.log("error");
                        });
                    }
                    response = { status: status, msg: "New group added successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: "An error occured." };
                    reject(response);
                });
            });
            return promiseResult;
        }
        else {
            console.log("@@11");
            response = { status: 400, msg: "Sorry! the group is already exist." };
        }
    });
    return response;
}

const update = async (data) => {
    let response = {};
    await prisma.groups.findFirst({ where: { title: data.title, is_deleted: 0, NOT: { id: data.group_id } } }).then(duplicate => {
        if (duplicate == null) {
            prisma.groupsAppearance.deleteMany({ where: { group_id: data.group_id } }).then(removeOld => {
                console.log("Deleted");
            });
            var promiseResult = new Promise(function (resolve, reject) {
                prisma.groups.update({
                    where: {
                        id: data.group_id
                    },
                    data: {
                        title: data.title,
                        description: data.description
                    }
                }).then(result => {
                    for (let index = 0; index < data.appearances.length; index++) {
                        const appearanceId = data.appearances[index];
                        prisma.groupsAppearance.create({
                            data: {
                                group_id: data.group_id,
                                appearance_id: appearanceId
                            }
                        }).then(ss => {
                            console.log("added");
                        }).catch(error => {
                            console.log("error");
                        });
                    }
                    response = { status: 200, msg: "Record updated successfully.", data: result };
                    resolve(response);
                }).catch(error => {
                    response = { status: 400, msg: error };
                    reject(response);
                });
            });
            return promiseResult;
        }
        else {
            response = { status: 400, msg: "Sorry! the group is already exist." };
        }
    });
    return response;
}

const remove_record = async (data) => {
    let response = {};
    var promiseResult = new Promise(function (resolve, reject) {
        prisma.groupsAppearance.deleteMany({
            where: {
                group_id: data.group_id
            }
        }).then(result => {
            prisma.groups.delete({
                where: {
                    id: data.group_id
                }
            }).then(removeRole => {
                response = { status: 200, msg: "Record removed successfully.", data: removeRole };
                resolve(response);
            }).catch(error => {
                response = { status: 400, msg: error };
                reject(response);
            });
        }).catch(error => {
            response = { status: 400, msg: error };
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