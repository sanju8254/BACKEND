const generatorBrandModel = require('../services/generatorBrandModel');
const index = async (req, res, next) => {
    try{
		res.json(await generatorBrandModel.list(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const create = async (req, res, next) => {
    try{
		res.json(await generatorBrandModel.store(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const update = async (req, res, next) => {
	try{
		res.json(await generatorBrandModel.update(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const remove_record = async (req, res, next) => {
	try{
		res.json(await generatorBrandModel.remove_record(req.body));
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