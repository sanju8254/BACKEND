const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();

const customerTypes = require("../services/customerTypes");
const index = async (req, res, next) => {
    const { searchString } = req.body;
    const or = searchString ? { type_name: { contains: searchString } } : {}
    let status = 200;
    let response = {};

    await prisma.customer_types.findMany({
        orderBy: {
            id: 'desc'
        },
        where: {
            is_deleted: 0,
            ...or
        }
    }).then(result => {
        response = {status: status, msg: "Fetched customer type list.", data: result};
		res.json(response);
    }).catch(error => {
		response = {status: 400, msg: "An error occured."};
		res.json(response);
	});
    try{
		res.json(await customerTypes.list(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const store = async (req, res, next) => {
    let status = 200;
    let response = {};
    const { type_name } = req.body
    await prisma.customer_types.findFirst({ where: {type_name: type_name} }).then(duplicate => {
        if(duplicate == null){
            prisma.customer_types.create({
                data: {
                    type_name
                },
            }).then(result => {
                response = {status: status, msg: "Customer type added successfully.", data: result};
                res.json(response);
            }).catch(error => {
                response = {status: 400, msg: "An error occured."};
                res.json(response);
            });
        }
        else{
            response = {status: 400, msg: "Sorry! the customer type is already exist."};
            res.json(response);
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
        res.json(response);
    });
    try{
		res.json(await customerTypes.store(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const update = async (req, res, next) => {
    let status = 200;
    let response = {};

    await prisma.customer_types.findFirst({ where: { type_name: req.body.type_name, NOT: { id: req.body.type_id } }}).then(duplicate => {
        if(duplicate == null){
            prisma.customer_types.update({
                where: {
                    id: req.body.type_id
                },
                data: {
                    type_name: req.body.type_name
                }
            }).then(result => {
                response = {status: 200, msg: "Record updated successfully."};
                res.json(response);
            }).catch(error => {
                response = {status: 400, msg: "An error occured."};
                res.json(response);
            });
        }
        else{
            response = {status: 400, msg: "Sorry! the customer type is already exist."};
            res.json(response);
        }
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
        res.json(response);
    });
    try{
		res.json(await customerTypes.update(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const remove_record = async (req, res, next) => {
    let status = 200;
    let response = {};
    await prisma.customer_types.update({
        where: {
            id: req.body.type_id
        },
        data: {
            is_deleted: 1
        }
    }).then(result => {
        response = {status: 200, msg: "Record removed successfully."};
        res.json(response);
    }).catch(error => {
        response = {status: 400, msg: "An error occured."};
        res.json(response);
    });
    try{
		res.json(await customerTypes.remove_record(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

module.exports = {
    index,
    store,
    update,
    remove_record
}