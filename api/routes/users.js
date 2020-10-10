const express = require('express');
const users = require('../models/users.json');

const router = express.Router();

const getUsers = (req, res) => res.send(users);
const getUser = (req, res) => res.send(users.find(user => user.id===req.params.id));
const postUser = (req, res) => {users.push(req.body); res.status(201).send(req.body)};

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);

module.exports = router;