var productController=require('../controllers/productController');
var router = require('express').Router()

router.get('/sucursales', function(req, res) {
  productController.listAll(req,res);
})
router.get('/sucursales/buscar/:idProducto', function(req, res) {
  productController.search(req,res);
})
router.get('/sucursales/:id', function(req, res) {
  productController.listProductsOfSpecificBranch(req,res);
})
router.post('/:id', function(req, res) {
  productController.create(req,res);
})
router.put('/:id', function(req, res) {
  productController.modify(req,res);
})
router.delete('/:idProducto/sucursales/:idSucursal', function(req, res) {
  productController.deleteFromSpecificBranch(req,res);
})
router.delete('/:id', function(req, res) {
  productController.deleteGlobal(req,res);
})
//url:puerto/api/clientes
module.exports = router