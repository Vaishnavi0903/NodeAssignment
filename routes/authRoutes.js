const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../controllers/authController');


router.post('/login', authenticateUser);

module.exports = router;
