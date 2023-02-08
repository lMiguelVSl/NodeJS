const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/hello-world', (req, res) => {
    res.send('Hello from Express');
})

app.get('*', (req, res) => {
    res.send('404 Not Found');
})
app.listen(port, () => console.log(`listen localhost:${port}`));