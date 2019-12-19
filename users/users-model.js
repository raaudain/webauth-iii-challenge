const db = require("../data/db-config");

function getUsers(){
    return db("users").select("id","username")
}

function findById(id){
    return db("users").where({id}).first()
}

function addUser(user){
    return db("users")
        .insert(user, "id")
        .then(ids => {
            const [id] = ids
            return findById(id)
        });
}

function findUser(user){
    return db("users").where(user);
}

module.exports = {getUsers, findUser, findById, addUser}