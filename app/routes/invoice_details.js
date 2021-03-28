var invoice_detailsController=require('../controllers/invoice_detailsController');
var router = require('express').Router()
router.get('/ventas/total/facturas', function(req, res) {
  //res.json({ message: 'Vas a buscar un producto'})
  invoice_detailsController.listAll(req,res);
})
router.get('/ventas/total/sucursales/:idSucursal/facturas/:idFactura ', function(req, res) {
  //res.json({ message: 'Estás conectado a la API. Recurso: clientes' })
  invoice_detailsController.listInvoiceOneBranch(req,res);
})
router.get('/ventas/total/facturas/sucursales/:id', function(req, res) {
  //res.json({ message: 'Vas a obtener la clientes con id ' + req.params.id })
  invoice_detailsController.listAllOneBranch(req,res);
})
router.post('/ventas/total/sucursales/:idSucursal/facturas/:idFactura', function(req, res) {
  //res.json({ message: 'Vas a añadir un cliente' })
  invoice_detailsController.create(req,res);
})
router.put('/ventas/total/sucursales/:idSucursal/facturas/:idFactura', function(req, res) {
  //res.json({ message: 'Vas a actualizar el cliente con id ' + req.params.id })
  invoice_detailsController.edit(req,res);
})
router.delete('/ventas/total/sucursales/:idSucursal/facturas/:idFactura', (req,res)=>{
  invoice_detailsController.delete(req,res);
})
//url:puerto/api/clientes
module.exports = router


