const express = require('express');
const usersRouter = require('./routes/users');
const emailsRouter = require('./routes/emails');
const unHandledRouter = require('./routes/unhandled');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users',usersRouter);
app.use('/emails', emailsRouter);
app.use(unHandledRouter);

app.listen(3000);