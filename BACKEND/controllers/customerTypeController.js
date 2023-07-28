const customerTypes = require("../services/customerTypes");
const index = async (req, res, next) => {
    try{
		res.json(await customerTypes.list(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const store = async (req, res, next) => {
    try{
		res.json(await customerTypes.store(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const update = async (req, res, next) => {
    try{
		res.json(await customerTypes.update(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const remove_record = async (req, res, next) => {
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