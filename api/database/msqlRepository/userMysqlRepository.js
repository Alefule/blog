const sequelize = require('../../database/conexions/sequalize');
const auth = require('../../passport/local');

const User = sequelize.User;

exports.showUsers = async () => {
    return await User.findAll()
};

exports.showOneUser = async (idToFind) => {
    return await User.findOne({ where: {id: idToFind} })
}

exports.addUser = async (newUser) => {
    try{
        await User.create(newUser)
        return await User.findOne({ where: {id: newUser.id} }); 
    }catch(e){
        console.log("Something was wrong " + e);
        return await User.findAll(); 
    }
}

exports.deleteUser = async (idToDelete) => {
    try{
        await User.destroy({
            where: {
                id: parseInt(idToDelete)
            }
        });
        return await User.findAll(); 
    }catch(e){
        console.log("Something was wrong " + e);
        return await User.findAll(); 
    }
}

exports.updateUser = async (idToUpdate, reqToUpdate) =>{
    try{
        await User.update(reqToUpdate , {
            where: {
              id: idToUpdate
            }
          });
        return await User.findAll(); 
    }catch(e){
        console.log("Something was wrong " + e);
        return await User.findAll(); 
    }
}

exports.findUserByEmail = async (mailToFind) => {
    return await User.findOne({ where: {mail: mailToFind} })
}

exports.findUserById = async (id) => {
    return await User.findOne({ where: {id} })
}

