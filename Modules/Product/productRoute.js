const router = require('express').Router();
const facade = require('./productFacade');
// const validator = require('./employeeValidators');
const resHndlr = require('../../handlers/responseHandler');

router.route('/add').post((req, res) => {
    facade.addproduct(req, res)
    .then((result) => {
         resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/get').get((req, res) => {
    facade.getproduct(req, res)
    .then((result) => {
         resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/get/:id').get((req, res) => {
    facade.getone(req, res)
    .then((result) => {
         resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

module.exports = router;