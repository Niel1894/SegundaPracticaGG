const express = require('express');
const router = express.Router();

const storeController = require('../controllers/store');

router.get('/', storeController.getStore);
router.post('/crear', storeController.createStore);
router.delete('/delete', storeController.deleteStore);
module.exports = router;