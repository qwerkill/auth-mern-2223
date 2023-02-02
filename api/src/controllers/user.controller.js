const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserController = {
  update: async (req, res, next) => {
        const {firstName, lastName,password} = req.body
        const {id} = req.params
        
        
    let updatedUser = {}

    if(!password){
      updatedUser = {
        firstName,
        lastName
        }
    }else{
      const hash = await bcrypt.hash(password, 10);
      updatedUser = {
        firstName,
        lastName,
        password: hash
        }
    }

    try{
      const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });

      const accessToken = jwt.sign({_id: user._id,email: user.email,firstName: user.firstName,lastName: user.lastName,password: user.password},process.env.JWT_SECRET,            {
        expiresIn: 86400,
        }
      );
      res.send({accessToken})
    }catch(err){
      return res.status(400).send({error: error.message})
    }
    },
}


        



module.exports = UserController