var branchController=require('../controllers/branchController');
var router = require('express').Router()

router.get('/', function(req, res) {
  //res.json({ message: 'Vas a obtener owner, active, address, creation_date, phone_number, email de cada una de las sucursales existentes'})
  branchController.listAll(req,res);
})
router.get('/:id', function(req, res) {
  //res.json({ message: 'Vas a obtener owner, active, address, creation_date, phone_number, email de la rama indicada'})
  branchController.listBranch(req,res);
})

router.put('/:id', function(req, res) {
  //res.json({ message: 'Vas a modificar la sucursal que coincida con el id proporcionado'})
  branchController.modify(req,res);
})
//url:puerto/api/branch
module.exports = router