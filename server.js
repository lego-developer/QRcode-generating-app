const path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const qrcode = require('qrcode')
 

const app = express()
const server = http.createServer(app)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/submitQRForm', (req, res, next) => {
    let text = req.body.text;
    qrcode.toDataURL(text, (err, src) => {
        res.json(src)
    })
})


const PORT = 5000 || process.env.PORT

app.post('/enter', (req, res) => {

})








server.listen(PORT, () => console.log("server started"))






