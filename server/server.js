const express = require('express');
const path = require('path');
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '..', 'client')));

const users = {}; // Store users and passwords (not secure in practice)

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

server.post('/signup', (req, res) => {
    const username = req.body.user;
    const password = req.body.password;
    users[username] = password;
    res.redirect('/login.html');
});

server.post('/login', (req, res) => {
    const username = req.body.user;
    const password = req.body.password;
    if (users[username] && users[username] === password) {
        res.redirect('/home.html');
    } else {
        res.send('Invalid login credentials');
    }
});

server.listen(3000, () => {
    console.log("Server is running");
});
