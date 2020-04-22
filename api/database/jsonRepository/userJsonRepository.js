//const users = require('users.json');
let users = [{
    "id":"1",
    "name":"Alejandro",
    "firstName":"Fuentes",
    "mail":"alesetneuf@gmail.com",
    "password":"1234",
    "token":""
},
{
    "id":"2",
    "name":"Jennifer",
    "firstName":"Montesdeoca",
    "mail":"jennirdg@gmail.com",
    "password":"1234",
    "token":""
},
{
    "id":"3",
    "name":"Diego",
    "firstName":"Fuentes",
    "mail":"diego@gmail.com",
    "password":"1234",
    "token":""
},
{
    "id":"4",
    "name":"Ivan",
    "firstName":"Fuentes",
    "mail":"ivan@gmail.com",
    "password":"1234",
    "token":""
}
]

exports.showUsers = () => users

exports.showOneUser = (id) => {
    console.log(id)
    return user = users.find(user => user.id == id);
}

exports.addUser = (user) => {
    newUserId = users.length + 1;
    let userToAdd = {
        "id": newUserId,
        "name": {...user.name},
        "firstName":{...user.firstName},
        "mail":{...user.mail},
        "password":{...user.password},
        "token":""
    }
    users.push(userToAdd);
    return users;
}

exports.deleteUser = (idToDelete) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == idToDelete) {
            users.splice(i,1);
        }
    }
    return {"delete": "ok"}
}

exports.updateUser = (idToUpadte, userToUpdate ) =>{
    for (let i = 0; i < films.length; i++) {
        if(users[i].id == idToUpadte){
            users[i].name = filmToUpdate.name || users[i].name;
            users[i].firstName = filmToUpdate.firstName || users[i].firstName;
            users[i].mail = filmToUpdate.mail || users[i].mail;
            users[i].password = filmToUpdate.password || users[i].password;
        }
    }
    return users;
}