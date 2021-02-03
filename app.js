const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});
app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

const PORT = 3069;
app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
