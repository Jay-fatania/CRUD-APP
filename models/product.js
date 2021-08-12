const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productschema = new Schema({
    product_name :{
        type: String
    },
    product_size:{
        type: String
    },
    product_price:{
        type: Number
    },
    product_is_deleted:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})

const Product = mongoose.model('Product', productschema)
module.exports = Product