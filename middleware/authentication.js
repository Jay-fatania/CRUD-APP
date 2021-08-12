const jwt = require('jsonwebtoken')
const msg = require('../Modules/Customer/customerConstant')

const authenticate = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'ScreTEs')

        req.user = decode 
        next()
    }
    catch{
        res.json({
            message: msg.auth_failed
        })
    }
}

module.exports = authenticate