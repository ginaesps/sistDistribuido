/* 
we link invoice.js with all of the /invoice routes, invoice_details.js with /invoice_details routes, and so on
in each /routeName , you should set the needed methods and link each one of them with the corresponding controller
*/
var router = require('express').Router()
 
var invoice = require('./invoice')
router.use('/invoice', invoice)

var product = require('./product')
router.use('/product', product)

var invoice_details = require('./invoice_details')
router.use('/invoice_details', invoice_details)

var branch = require('./branch')
router.use('/branch', branch)
 
router.get('/', (req, res) => {// debug for you to make sure that everything´s working as expected
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})
//localhost:1330/api
module.exports = router