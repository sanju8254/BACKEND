const customerNoteTitleModel = require('../services/customerNoteTitleModel');
const index = async (req, res, next) => {
    try{
		res.json(await customerNoteTitleModel.list(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const create = async (req, res, next) => {
    try{
		res.json(await customerNoteTitleModel.store(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const update = async (req, res, next) => {
	try{
		res.json(await customerNoteTitleModel.update(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const remove_record = async (req, res, next) => {
	try{
		res.json(await customerNoteTitleModel.remove_record(req.body));
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