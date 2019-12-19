const router = require("express").Router();

const AuthRouter = require("../auth/auth-router");
const UserRouter = require("../users/users-router");

router.use("/", AuthRouter);
router.use("/users", UserRouter);

router.get("/", (req, res) => res.json({message: "It's working!"}));

module.exports = router;