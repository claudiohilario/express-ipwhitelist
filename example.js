const express = require('express');

const ipWhiteList = require('./index');


const app = express();

app.use(ipWhiteList([
    '::1'
]))


app.use((req, res) => {
    res.send('Accessed');
})



app.listen(4444);