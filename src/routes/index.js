// Main router (to combine all routes)
const express = require('express');
const router = express.Router();

const branchRouter = require('./branch');
router.use('/branches', branchRouter);

module.exports = router;
