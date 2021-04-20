var productController=require('../controllers/productController');
var router = require('express').Router()

router.get('/sucursales', function(req, res) {
  //res.json({ message: 'Vas a obtener todos los productos de todas las sucursales y todas las cantidades disponibles en cada una de las sucursales'})
  productController.listAll(req,res);
})
router.get('/sucursales/buscar/:idProducto', function(req, res) {
  //res.json({ message: 'Vas a saber si un producto existe, su información general y sucursales en las cuales está disponible'})
  productController.search(req,res);
})
router.get('/sucursales/:id', function(req, res) {
  //res.json({ message: 'Vas a obtener todos los productos y cantidades existentes en cierta sucursal'})
  productController.listProductsOfSpecificBranch(req,res);
})
router.post('/', function(req, res) {
  //res.json({ message: 'Vas a insertar un producto'})
  productController.create(req,res);
})
router.put('/:id', function(req, res) {
  //res.json({ message: 'Vas a modificar la información de un producto específico'})
  productController.modify(req,res);
})
// router.delete('/:idProducto/sucursales/:idSucursal', function(req, res) {
//   productController.deleteFromSpecificBranch(req,res);
// })
// router.delete('/:id', function(req, res) {
//   productController.deleteGlobal(req,res);
// })
//url:puerto/api/clientes
module.exports = router