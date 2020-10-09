const express = require('express');

const router = express.Router();

const unHandled = (req, res) => res.send(`You requested ${req.method} ${req.url}`);

router.all('/*', unHandled);

module.exports = router;