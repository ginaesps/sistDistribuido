var invoiceController=require('../controllers/invoiceController');
var router = require('express').Router()

router.get('/ventas', function(req, res) {
    //res.json({ message: 'Vas a obtener todos los invoice (solo datos de tabla invoice) generados por todas las sucursales'})
    invoiceController.listAll(req,res);
})
router.get('/ventas/sucursales/:id', function(req, res) {
    //res.json({ message: 'Vas a obtener todas las facturas generadas por cierta sucursal'})
    invoiceController.listOfSpecificBranch(req,res);
})
router.get('/ventas/total', function(req, res) { // includes taxes
    //res.json({ message: 'Vas a obtener la cantidad total facturada entre todas las sucursales'})
    invoiceController.finalQuantity(req,res);
})
router.get('/ventas/total/sucursales/:id', function(req, res) { // includes taxes
    //res.json({ message: 'Vas a obtener la cantidad total facturada de cierta sucursal.'})
    invoiceController.finalQuantityofSpecificBranch(req,res);
})

router.post('/ventas/total/sucursales/:id', function(req,res) {
    //res.json({ message: 'Vas a insertar una factura'})
    invoiceController.create(req,res);
})

// router.put('/ventas/total/sucursales/:idSucursal/facturas/:idFactura',(req,res)=>{
//     invoiceController.modify(req,res)
// })

// router.delete('/ventas/total/sucursales/:idSucursal/facturas/:idFactura', (req,res)=>{
//     invoiceController.delete(req,res);
// })
module.exports = router