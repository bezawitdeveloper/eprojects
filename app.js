const fs = require('fs');
const express = require('express');
const port = 6501;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to easy shopping site</h1>');
})

app.listen(port, err => {
    if (err) throw err
    else {
        console.log('port successfully connected')
    }
})

fs.readFile('./data/db.json', (err, data) => {
    if (err) {
        throw err
    } else {
        
        console.log(JSON.parse(data))
    }
})

fs.appendFile('./data/mytext.txt', 'This is new file', err=> {
    if (err) throw err
     else {
        console.log('appeneded successfully')
    }
    
})

app.get('/getmovies', (req, res) => {
    fs.readFile('./data/db.json', (err, data) => {
        if (err) {
            throw err
        } else
        res.send(JSON.parse(data));
    })
})