const express = require('express');
const router = express.Router();
const providerController = require('../controllers/provider');

router.get('/', providerController.getProvider);
router.post('/crear', providerController.createProvider);
module.exports = router;
