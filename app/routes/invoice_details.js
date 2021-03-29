var invoice_detailsController=require('../controllers/invoice_detailsController');
var router = require('express').Router()

router.get('/ventas/total/facturas', function(req, res) {
  invoice_detailsController.listAll(req,res);
})
router.get('/ventas/total/sucursales/:idSucursal/facturas/:idFactura ', function(req, res) {
  invoice_detailsController.listOneOfSpecificBranch(req,res);
})
router.get('/ventas/total/facturas/sucursales/:id', function(req, res) {
  invoice_detailsController.listAllOfSpecificBranch(req,res);
})
router.post('/ventas/total/sucursales/:idSucursal/facturas/:idFactura', function(req, res) {
  invoice_detailsController.create(req,res);
})
router.put('/ventas/total/sucursales/:idSucursal/facturas/:idFactura', function(req, res) {
  invoice_detailsController.edit(req,res);
})
router.delete('/ventas/total/sucursales/:idSucursal/facturas/:idFactura', (req,res)=>{
  invoice_detailsController.delete(req,res);
})
//url:puerto/api/clientes
module.exports = router


