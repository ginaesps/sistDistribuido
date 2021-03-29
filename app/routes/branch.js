var branchController=require('../controllers/branchController');
var router = require('express').Router()

router.get('/', function(req, res) {
  branchController.listAll(req,res);
})
router.get('/:id', function(req, res) {
  branchController.listBranch(req,res);
})

router.put('/:id', function(req, res) {
  branchController.modify(req,res);
})
//url:puerto/api/branch
module.exports = router