const express = require('express');
const users = require('../models/users.json');

const router = express.Router();

const getUsers = (req, res) => res.send(users);
const getUser = (req, res) => res.send(users.find(user => user.id===req.params.id));

router.get('/', getUsers);
router.get('/:id', getUser);

module.exports = router;