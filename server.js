const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log("Incoming Call Event:", JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
});

app.listen(3978, () => {
    console.log('Teams Bot listening on port 3978');
});