const { PrismaClient } = require("../prisma/src/generated/client");
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
    let status = 200;
    let response = {};
    await prisma.users.findFirst({ where: {email: req.body.email, status: 1, is_deleted: 0} }).then(user_details => {
        if(user_details == null){
            response = {status: 400, msg: "Invalid username or password."};
            res.json(response);
        }
        else{
            //check password
            bcrypt.compare(req.body.password, user_details.password, (bErr, bResult) => {
                if(bResult == false){
                    response = {status: 400, msg: "Invalid username or password."};
                    res.json(response);
                }
                if(bResult == true){
                    const token = jwt.sign({id:user_details.id},'the-super-strong-secrect',{ expiresIn: '24h' });
                    user_details.token = token;
                    response = {status: 200, msg: "Logged in successfully.", data: user_details};
                    res.json(response);
                }
            });
        }
    });
}

const check_login = (req, res, next) => {
    response = {status: 200, msg: "Valid token."};
    res.json(response);
}
module.exports = {
    login,
    check_login
}

