var invoiceController=require('../controllers/invoiceController');
var router = require('express').Router()

router.get('/ventas', function(req, res) {
    invoiceController.listAll(req,res);
})
router.get('/ventas/sucursales/:id', function(req, res) {
    invoiceController.listOfSpecificBranch(req,res);
})
router.get('/ventas/total', function(req, res) { // includes taxes
    invoiceController.finalQuantity(req,res);
})
router.get('/ventas/total/sucursales/:id', function(req, res) { // includes taxes
    invoiceController.finalQuantityofSpecificBranch(req,res);
})

router.post('/ventas/total/sucursales/:id', function(req,res) {
     invoiceController.create(req,res);
})

router.put('/ventas/total/sucursales/:idSucursal/facturas/:idFactura',(req,res)=>{
    invoiceController.modify(req,res)
})

router.delete('/ventas/total/sucursales/:idSucursal/facturas/:idFactura', (req,res)=>{
    invoiceController.delete(req,res);
})
module.exports = router