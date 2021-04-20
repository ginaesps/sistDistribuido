var invoice_detailsController=require('../controllers/invoice_detailsController');
var router = require('express').Router()

router.get('/ventas/total/facturas', function(req, res) {
  //res.json({ message: 'Vas a obtener todos los invoice details generados por todas las sucursales'})
  invoice_detailsController.listAll(req,res);
})
router.get('/ventas/total/sucursales/:idSucursal/facturas/:idFactura ', function(req, res) {
  //res.json({ message: 'Vas a obtener todos los detalles de cierta factura generada en la sucursal indicada'})
  invoice_detailsController.listOneOfSpecificBranch(req,res);
})
router.get('/ventas/total/facturas/sucursales/:id', function(req, res) {
  //res.json({ message: 'Vas a obtener todos los detalles de factura generados en cierta sucursal'})
  invoice_detailsController.listAllOfSpecificBranch(req,res);
})
router.post('/ventas/total/sucursales/:idSucursal/facturas/:idFactura', function(req, res) {
  //res.json({ message: 'Vas a insertar el desglose de una factura en específico'})
  invoice_detailsController.create(req,res);
})
router.put('/ventas/total/sucursales/:idSucursal/facturas/:idFactura', function(req, res) {
  //res.json({ message: 'Vas a editar el desglose de una factura en específico'})
  // ESTA DEBERÍA SEGUIR HABILITADA?
  invoice_detailsController.edit(req,res);
})
router.delete('/ventas/total/sucursales/:idSucursal/facturas/:idFactura', (req,res)=>{
  //res.json({ message: 'Vas a eliminar detalles de factura generados'})
  // DEBERÍA SEGUIR HABILITADO?
  invoice_detailsController.delete(req,res);
})
//url:puerto/api/clientes
module.exports = router


