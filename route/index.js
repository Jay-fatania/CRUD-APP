const CustomerRoute = require('../Modules/Customer/CustomerRoute')
const productRoute = require('../Modules/Product/productRoute')

module.exports = (app) => {

    // employee route 
    app.use('/shop/customer', [CustomerRoute])
    app.use('/shop/product', [productRoute])
}