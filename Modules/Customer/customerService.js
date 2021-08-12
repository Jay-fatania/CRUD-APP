const CustomerModel = require('../../models/customer')
const msg = require('./customerConstant')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const constant = require('../../utils/constant')

//show customer details list
const getcustomer = (req) => {
    
    let query = {
        customer_is_deleted: false
    }
    return CustomerModel.find(query).then((result)=>{
        if(result){
            return {Customer: result}
        }
        else{
            return 1
        }
    })
}

//show single Customer detail
const getone = (req) => {

    let query = {
        customer_is_deleted: false,
        _id: req.params.id
    }
    
    return CustomerModel.findById(query).then((result) => {
        if(result){
            return {Customer: result}
        }
        else{
            return 1
        }
    })
}

//store new customer
let addCustomer = (req) => {

    let query = {
        customer_is_deleted: false,
        customer_email: req.body.customer_email
    }

    return CustomerModel.findOne(query).then((result) => {
        if (result) {
            //email exist
            return 1
        } else {
            bcrypt.hash(req.body.customer_password, 10, (err, hashpass) => {
                if (err) {
                    return {Error: err}
                }
                let customer = new CustomerModel({
                    customer_name: req.body.customer_name,
                    customer_email: req.body.customer_email,
                    customer_password: hashpass,
                })
                return customer.save().then((result) => {
                    return result
                })
            })
        }
    })
}

//update customer 
const updateCustomer = (req) => {
    
    let query = {
        customer_is_deleted: false,
        _id: req.params.id
    }

    return CustomerModel.findById(query).then((result) => {
        if(result){
            bcrypt.hash(req.body.customer_password, 10, (err, hashpass) => {
                if (err) {
                    return {error: err}
                }
                let CustomerID = req.params.id
        
                let updateData = {
                    customer_name: req.body.customer_name,
                    customer_email: req.body.customer_email,
                    customer_password: hashpass,
                }
        
                return CustomerModel.findByIdAndUpdate(CustomerID, { $set: updateData })
                    .then((result) => {
                        return result
                    })
                })
        } else{
                return 1;
            }
        })
    }
//delete customer
const deleteCustomer = (req) => {

    let query = {
        customer_is_deleted: false,
        _id : req.params.id
    }
    return CustomerModel.findByIdAndRemove(query)
        .then((result) => {
            if(result){
                return result
            }
            else{
                return 1
            }
        })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    //console.log(password , username)
    Customer.findOne({ $or: [{ usr_email: username }, { usr_mobile: username }] })
        .then(customer => {
            if (customer) {
                bcrypt.compare(password, customer.usr_password, function (err, result) {
                    //console.log(password)
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ name: customer.usr_firstname }, 'ScreTEs', { expiresIn: '1h' })
                        res.json({
                            message: msg.login,
                            token: token
                        })
                    } else {
                        res.json({
                            message: msg.loginError
                        })
                    }
                })
            }
            else {
                res.json({
                    message: msg.customernotFound
                })
            }
        })
}
module.exports = {
    getcustomer, getone, addCustomer, updateCustomer, deleteCustomer, login
}