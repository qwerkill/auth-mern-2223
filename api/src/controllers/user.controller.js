const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const UserController = {
     update: async (req, res, next) => {
        const {firstName, lastName,password} = req.body

        
        if(!password){
          const user = await User.findByIdAndUpdate(req.params.id, {
            firstName,
            lastName,
          }, {new: true})
          
          res.send(user)
        } else{
          const hash = await bcrypt.hash(password, 10);
          const user = await User.findByIdAndUpdate(req.params.id, {
                firstName,
                lastName,
                password: hash
            }, {new: true})
    
            res.send(user)
        }      
    },
}
        



module.exports = UserController