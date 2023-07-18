const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
console.log('in the index controller');
/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
