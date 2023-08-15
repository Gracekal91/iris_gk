const express = require('express');

const router = express.Router();

const  dataController = require('../controllers/dataController');

router.route('/data').get(dataController.getDataContent);
router.route('/plots').get(dataController.getPlotsItems);
router.route('/variables').get(dataController.getVariables);

module.exports = router;