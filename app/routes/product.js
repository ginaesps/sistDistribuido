var productController=require('../controllers/productController');
var router = require('express').Router()
router.get('/productos/sucursales', function(req, res) {
  //res.json({ message: 'Vas a buscar un producto'})
  productController.listAll(req,res);
})
router.get('/productos/sucursales/buscar/:idProducto', function(req, res) {
  //res.json({ message: 'Estás conectado a la API. Recurso: clientes' })
  productController.listbuscar(req,res);
})
router.get('/productos/sucursales/:id', function(req, res) {
  //res.json({ message: 'Vas a obtener la clientes con id ' + req.params.id })
  productController.listProducts(req,res);
})
router.post('/productos/id', function(req, res) {
  //res.json({ message: 'Vas a añadir un cliente' })
  productController.postProduct(req,res);
})
router.put('/productos/:id', function(req, res) {
  //res.json({ message: 'Vas a actualizar el cliente con id ' + req.params.id })
  productController.putProduct(req,res);
})
router.delete('/productos/:idProducto/sucursales/:idSucursal', function(req, res) {
  //res.json({ message: 'Estás conectado a la API. Recurso: clientes' })
  productController.deletesucursal(req,res);
})
router.delete('/productos/:id', function(req, res) {
  //res.json({ message: 'Estás conectado a la API. Recurso: clientes' })
  productController.Deletglobal(req,res);
})
//url:puerto/api/clientes
module.exports = router