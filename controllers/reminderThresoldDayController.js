const reminderThresoldDays = require("../services/reminderThresoldDays");
const index = async (req, res, next) => {
    try{
		res.json(await reminderThresoldDays.list());
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

const store = async (req, res, next) => {
    try{
		res.json(await reminderThresoldDays.store(req.body));
	}
	catch(err){
		console.error(`Error while getting programming languages `, err.message);
    	next(err);
	}
}

module.exports = {
    index,
    store
}

