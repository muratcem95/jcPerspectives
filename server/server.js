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

app.post('/contact', (req, res) => {
    // setup email data with unicode symbols
    let mailOptions = {
        from: 'muratcem95@gmail.com', // sender address
        to: "muratcem95@gmail.com", // list of receivers
        subject: `JC Perspectives Contact: ${req.body.email}`, // Subject line
        html: `<b>message:</b><br>${req.body.message}` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        };
    });
});






























server.listen(port, () => console.log(`Server is up on port ${port}`));