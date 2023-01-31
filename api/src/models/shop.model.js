const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    imageUrl: {
        type: String,
        default: 'https://www.ikea.com/PIAimages/0452019_PE694201_S5.JPG'
    },
    description: {
        type: String,
        required: true,
    },
    location : {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Shop', shopSchema);