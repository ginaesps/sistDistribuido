var invoiceController=require('../controllers/invoiceController');
var router = require('express').Router()

// router.get('/', function(req, res) {
  
//     invoiceController.list(req,res);
// })
// router.get('/:id', function(req, res) {
  
//     invoiceController.find(req,res);
// })
// router.post('/', function(req, res) {
  
//     invoiceController.create(req,res);
// })
//url:puerto/api/clientes

router.delete('/ventas/total/sucursales/:idSucursal/facturas/:idFactura', (req,res)=>{
    invoiceController.delete(req,res);
})
module.exports = router


