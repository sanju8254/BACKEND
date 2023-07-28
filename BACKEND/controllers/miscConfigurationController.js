const miscConfiguration = require("../services/miscConfiguration");
const index = async (req, res, next) => {
    try{
		res.json(await miscConfiguration.list(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const logging_details = async (req, res, next) => {
    try{
		res.json(await miscConfiguration.logging_details(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const update_logging_details = async (req, res, next) => {
    try{
        res.json(await miscConfiguration.update_logging_details(req.body));
    }
    catch(err){
        next(err);
    }
}

const smtp_details = async (req, res, next) => {
    try{
        res.json(await miscConfiguration.smtp_details());
    }
    catch(err){
        next(err);
    }
}

const update_smtp_details = async (req, res, next) => {
    try{
        res.json(await miscConfiguration.update_smtp_details(req.body));
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    index,
    logging_details,
    update_logging_details,
    smtp_details,
    update_smtp_details
}

