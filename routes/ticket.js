const express = require('express');

const router = express.Router();

const ticketController = require('../controllers/ticket');

router.get('/', ticketController.getTicket);
router.post('/crear', ticketController.createTicket);
router.delete('/delete/:id', ticketController.deleteTicket);
module.exports = router;