const jwt = require("jsonwebtoken");

function restricted(req, res, next){
    const {authorization} = req.headers;

    if(authorization){
        const hush = process.env.JWT_SECRET || "Hush your mouth!!";

        jwt.verify(authorization, hush, function(err, decodedToken){
            if(err){
                res.status(401).json({message: "Invalid token."});
            }
            else{
                req.token = decodedToken;
                next();
            }
        });
    }
    else{
        res.status(400).json({message: "Please login and try again."})
        console.log(req.headers)
    }

}

module.exports = restricted;