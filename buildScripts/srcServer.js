import express from 'express';
import open from 'open';
import path from 'path';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});