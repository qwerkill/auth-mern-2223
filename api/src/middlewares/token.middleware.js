const jwt = require('jsonwebtoken')


const TokenMiddleware = (req, res, next) => {

    const authHeader = req.headers['authorization']
    console.log("TokenMiddleware: ", authHeader)
    const token = authHeader && authHeader.split(' ')[1]
    console.log("TokenMiddleware: ", token)

    if(!token) return res.status(401).send({error: "Not token provided"});
    

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return res.status(403).send({error: "Invalid token"});
        console.log("TokenMiddleware user: ", user)
        req.user = user;
        next()
    })

    
}
module.exports = TokenMiddleware