const database = require('../database/msqlRepository/userMysqlRepository');

exports.showUsers = async (req,res) => {
    users = await database.showUsers();
    res.json(users);
};

exports.showOneUser = async (req,res) => {
    user = await database.showOneUser(req.params.id);
    res.json(user);
}

exports.addUser = async (req, res) => {
    addUserResponse = await database.addUser({...req.body});
    res.json(addUserResponse);
}

exports.deleteUser = async (req, res) => {
    deleteUserResponse = await database.deleteUser(req.params.id);
    res.json(deleteUserResponse);
}

exports.updateUser = async (req, res) =>{
    users = await database.updateUser(req.params.id, {...req.body});
    res.json(users);
}

exports.findUserByEmail = async (email) => {
    user = await database.findUserByEmail(email);
    return user;
}

exports.authenticate = async (req, res) =>{
    isAuthenticate = await database.authenticate(req);
    return isAuthenticate;
}