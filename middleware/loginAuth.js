const jwt = require('jsonwebtoken');

function validateToken(req, res, next){
	let response = {};
	let status = 410;
	let message = "Your session is expired.";
	if (req.headers.authorization) {
		const authHeader = req.headers.authorization;
		const token = authHeader.split(" ")[1];
		jwt.verify(token, 'the-super-strong-secrect', (err, user) => {
			if (err) {
				console.log("invalid token");
				response = {status: status, msg: message};
				res.json(response);
			}
			else{
			req.user = user;
			next();
			}
		});
	}
	else{
		response = {status: status, msg: message};
		res.json(response);
	}
}

module.exports = {
  validateToken
}