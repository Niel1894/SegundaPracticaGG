const express = require('express');
const router = express.Router();
const providerController = require('../controllers/provider');

router.get('/', providerController.getProvider);
router.post('/crear', providerController.createProvider);
router.get('/productos', providerController.getProviderProduct);
module.exports = router;
