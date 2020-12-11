const express = require('express');
const router = express.Router();
const { authorise } = require("../middleware/authorisation_middleware");
const {
    index,
    dashboard
} = require('../controllers/page_controller');

router.get('/', index);
router.get('/dashboard', authorise, dashboard);

module.exports = router;