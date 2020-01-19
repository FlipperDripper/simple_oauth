const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const rootRouter = require('./app/network/root');
const authRouter = require('./app/network/auth');
const config = require('./app/config');

const app = express();
app.use(cookieParser());
app.use('/', rootRouter);
app.use('/auth', authRouter);


app.listen(config.port, config.host, ()=>{
    console.log(`server listening ${config.host}:${config.port}`);
});