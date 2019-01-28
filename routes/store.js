const express = require('express');
const router = express.Router();

const storeController = require('../controllers/store');

router.get('/', storeController.getStore);
router.post('/crear', storeController.createStore);
module.exports = router;