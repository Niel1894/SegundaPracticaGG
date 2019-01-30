const express = require('express');

const router = express.Router();

const ticketController = require('../controllers/ticket');

router.get('/', ticketController.getTicket);
router.post('/crear', ticketController.createTicket);
router.delete('/delete/:id', ticketController.deleteTicket);
router.delete('/delete', ticketController.deleteAllTicket);
router.get('/:id', ticketController.getOneTicketClient);
module.exports = router;