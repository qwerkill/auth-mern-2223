const Shop = require('../models/shop.model')

const ShopController = {
    create: async (req, res, next) => {
        const {name,description,location,imageUrl} = req.body
        const {user} = req

        const shop = new Shop({name,user,description,location,imageUrl})

        console.log(shop)

        try {
            await shop.save()
            res.status(201).send(shop)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    getAll : async (req, res, next) => {
        try {
            const shops = await Shop.find()
            res.status(200).send(shops)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    update : async (req, res) => {
        const {name,description,location,imageUrl} = req.body
        const {id} = req.params
        
        try {
           
            const shop = await Shop.findByIdAndUpdate(req.params.id, {
                name,
                description,
                location,
                imageUrl,
            }, {new: true})

            res.send(shop)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    getOne : async (req, res) => {
        try {
            const shop = await Shop.findById(req.params.id)
            res.send(shop)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    delate : async (req, res) => {
        try {
            const shop = await Shop.findByIdAndDelete(req.params.id)
            res.send(shop)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }

}

module.exports = ShopController