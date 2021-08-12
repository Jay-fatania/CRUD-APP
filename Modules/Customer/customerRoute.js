const router = require('express').Router();
const facade = require('./CustomerFacade');
// const validator = require('./employeeValidators');
const resHndlr = require('../../handlers/responseHandler');

router.route('/add').post((req, res) => {
    facade.addcustomer(req, res)
    .then((result) => {
         resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/update/:id').put((req, res) => {
    facade.updatecustomer(req, res)
    .then((result) => {
         resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/get').get([], (req, res) => {
    facade.getcustomer(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/get/:id').get([], (req, res) => {
    facade.getone(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/delete/:id').delete([], (req, res) => {
    facade.deleteCustomer(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

module.exports = router;