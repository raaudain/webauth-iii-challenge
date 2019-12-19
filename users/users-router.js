const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../auth/middleware/restricted");

router.get("/", 
restricted, 
(req, res) => {
    Users.getUsers()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});




module.exports = router;