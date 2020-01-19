const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./app/network/auth');
const friendsRouter = require('./app/network/friends');
const config = require('./app/config');

const app = express();
app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use('/api/friends', friendsRouter)

app.listen(config.port, config.host, ()=>{
    console.log(`server listening ${config.host}:${config.port}`);
});
