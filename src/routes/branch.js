// Branch Routes
const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController');

// CRUD routes for branches
router.post('/', branchController.createBranch);
router.get('/', branchController.getBranches);
router.get('/:id', branchController.getBranchById);
router.put('/:id', branchController.updateBranch);
router.delete('/:id', branchController.deleteBranch);

module.exports = router;
