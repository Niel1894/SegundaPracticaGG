const express = require('express');

const router = express.Router();

const ticketController = require('../controllers/ticket');

router.get('/', ticketController.getTicket);
router.post('/crear', ticketController.createTicket);
module.exports = router;