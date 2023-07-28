const workOrderType = require('../services/workOrderTypes');
const index = async (req, res, next) => {
    try{
		res.json(await workOrderType.list(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const create = async (req, res, next) => {
    try{
		res.json(await workOrderType.store(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const update = async (req, res, next) => {
	try{
		res.json(await workOrderType.update(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const remove_record = async (req, res, next) => {
	try{
		res.json(await workOrderType.remove_record(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

module.exports = {
    index,
    create,
	update,
	remove_record
}