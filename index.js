const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook(process.env.webhook);

var cors = require('cors');
app.use(cors());

app.post('/api/start', async (req, res) => {
  hook.send("Yo gang " + req.headers['x-forwarded-for'] || req.socket.remoteAddress + " hit up aamogh notes with a request")
})



app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error');
});


app.listen(64135, () => {
    console.log('server up and running gangity');
})