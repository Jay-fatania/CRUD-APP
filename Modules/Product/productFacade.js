const service = require('./productService');   
const resHndlr = require('../../handlers/responseHandler');
const constant = require('../../utils/constant');
const productConstant = require('./productConstant')

let addproduct = (req) => {
    return service.addproduct(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.ProductExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.AddProductSuccess, data)
        }
    }, (error) => {
        console.log('addEmployee Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.AddProductError, error);
    })
}

let getproduct = (req) => {
    return service.getproduct(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.ProductNotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.ShowProduct, data)
        }
    }, (error) => {
        console.log('addEmployee Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.getError, error);
    })
}

let getone = (req) => {
    return service.getone(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.ProductNotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.ShowProduct, data)
        }
    }, (error) => {
        console.log('addEmployee Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.getError, error);
    })
}

module.exports = {
    addproduct,getproduct, getone
}