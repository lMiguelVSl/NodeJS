const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 3000;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//static content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Miguel Angel Vargas',
        title: 'Node Course'
    });
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})
app.listen(port, () => console.log(`listen localhost:${port}`));