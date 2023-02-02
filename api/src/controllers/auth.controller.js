const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const AuthController = {
    signup: async (req, res, next) => {
       const {email, password,} = req.body


    const hash = await bcrypt.hash(password, 10);
     try{
    const user = await User.create({
            email,
            password: hash
        })
        delete user.password
       
       res.send(user)
    }catch(err){
        return res.status(400).send({error: error.message})
    }

    },
    
    signin: async (req, res, next) => {
        const {email, password} = req.body
    
        const user = await User.findOne({email}).select('+password')

        if(!user) {
            return res.status(400).send({error: "User not found"})
        }

        const ressult = await bcrypt.compare(password, user.password)

        if(!ressult){
            return res.status(400).send({error: "Invalid password"})
        }
        const accessToken = jwt.sign({_id: user._id, email,firstName:user.firstName, lastName:user.lastName}, process.env.JWT_SECRET, {
            expiresIn: 86400
        })


        res.send({accessToken})

    },
}

module.exports = AuthController 