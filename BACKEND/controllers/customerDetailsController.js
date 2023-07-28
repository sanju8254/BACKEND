const customerDetailsModel = require('../services/customerDetailsModel');
const index = async (req, res, next) => {
	try {
		res.json(await customerDetailsModel.list(req.body));
	}
	catch (err) {
		console.error(`Error while getting programming languages `, err.message);
		next(err);
	}
}
const create = async (req, res, next) => {
    try{
		res.json(await customerDetailsModel.store(req.body, req.user));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}
const update = async (req, res, next) => {
	try{
		res.json(await customerDetailsModel.update(req.body,req.user));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const remove_record = async (req, res, next) => {
	try{
		res.json(await customerDetailsModel.remove_record(req.body,req.user));
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