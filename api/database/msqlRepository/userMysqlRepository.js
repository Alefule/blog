const sequelize = require('../../database/conexions/sequalize');
const passport = require('passport')
const auth = require('../../auth/local');

const User = sequelize.User;

exports.showUsers = async () => {
    return await User.findAll()
};

exports.showOneUser = async (idToFind) => {
    return await User.findOne({ where: {id: idToFind} })
}

exports.addUser = async (newUser) => {

    console.log(newUser.password)
    try{
        newUser.password = await auth.encryptPassword(newUser.password);
        await User.create(newUser)
        return await User.findAll(); 
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

exports.findUserByEmail = async (emailToFind) => {
    return await User.findOne({ where: {email: emailToFind} })
}

exports.authenticate = passport.authenticate("local", {
    successRedirect: "/user/1",
    failureRedirect: "/users",
  });

