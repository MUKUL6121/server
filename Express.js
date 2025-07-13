//thsi file contain express.js code that how to use it.
const express = require('express');
const path = require('path')
const app = express();
const PORT = 5500;
// const a = '../../HTML CSS JS course/Assignement/KFC.html'

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, a))
    res.send("Welcome, to new file");
});
app.post('/post', (req, res) => {
    res.send(`<h1>hello</h1>\nData Posted.`);
});
app.put('/put', (req, res) => {
    res.send(`<h1>hello</h1>\nData Updated.`);
});
app.delete('/delete', (req, res) => {
    res.send(`<h1>hello</h1>\nData Deleted.`);
});

app.listen(PORT, () => {
    // console.log(`http://localhost:${PORT})
    conseol.log("server___Started");
})
