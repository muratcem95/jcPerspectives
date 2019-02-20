//CONNECTIVITY SETUP
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const nodemailer = require('nodemailer');

const viewsPath = path.join(__dirname, '../views');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'muratcem95@gmail.com',
        pass: 'hqkjctddswrplwjm'
    }
});

app.set('views', viewsPath);  
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static(viewsPath));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

server.listen(port, () => console.log(`Server is up on port ${port}`));