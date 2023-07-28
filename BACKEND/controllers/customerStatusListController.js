const customerStatusList = require("../services/customerStatusList");
const index = async (req, res, next) => {
    try{
		res.json(await customerStatusList.list(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const store = async (req, res, next) => {
    try{
		res.json(await customerStatusList.store(req.body, req.user));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const update = async (req, res, next) => {
    try{
		res.json(await customerStatusList.update(req.body, req.user));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const remove_record = async (req, res, next) => {
    try{
		res.json(await customerStatusList.remove_record(req.body));
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

