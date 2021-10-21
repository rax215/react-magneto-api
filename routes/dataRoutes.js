const express = require('express');
const router = express.Router();
const tableData = require('./tableData');
const chartData = require('./chartData');

router.get('/tableData', (request, response) => {
  response.json(tableData);
});

router.get('/chartData', (request, response) => {
  response.json(chartData);
});

module.exports = router;
