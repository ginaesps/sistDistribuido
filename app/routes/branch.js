var productController=require('../controllers/productController');
var router = require('express').Router()

router.get('/', function(req, res) {
  productController.listAll(req,res);
})
router.get('/:id', function(req, res) {
  productController.listBranch(req,res);
})

router.put('/:id', function(req, res) {
  productController.modify(req,res);
})
//url:puerto/api/branch
module.exports = router