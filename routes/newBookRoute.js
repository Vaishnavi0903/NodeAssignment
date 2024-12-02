
const express = require('express');
const router = express.Router();
const newBookController = require('../controllers/newBookController'); 


router.post('/create', newBookController.createBook);

module.exports = router;
