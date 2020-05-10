const database = require('../database/msqlRepository/userMysqlRepository');
const authController = require('./authController');

exports.showUsers = async (req,res) => {
    users = await database.showUsers();
    res.json(users);
};

exports.showOneUser = async (req,res) => {
    user = await database.showOneUser(req.params.id || id);
    res.json(user);
}

exports.addUser = async (req, res) => {
    user = {...req.body};
    user.password = await authController.setPassword(user.password);
    addUserResponse = await database.addUser(user);
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

exports.findUserById = async (id) => {
    user = await database.findUserById(id);
    return user;
}
