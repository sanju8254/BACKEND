const customers = require('../services/customers');
const index = async (req, res, next) => {
    try{
		res.json(await customers.list(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const create = async (req, res, next) => {
    try{
		res.json(await customers.store(req.body, req.user));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const update = async (req, res, next) => {
	try{
		res.json(await customers.update(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const remove_record = async (req, res, next) => {
	try{
		res.json(await customers.remove_record(req.body));
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