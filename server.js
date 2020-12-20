const express = require('express');
const path = require('path');
const app=express();

app.use(express.static(__dirname+'/narruto-app/src/app'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/narruto-app/src/index.html'));
});

app.listen(process.env.PORT || 3000);