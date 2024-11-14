const express = require('express')
const app = require('./src/app');
const mongoose = require('mongoose')
const cors = require('cors');


app.use(cors({
    origin: 'https://youtube-subscriber-kappa.vercel.app/',
    methods: ['GET'],
    credentials: true,
  }));


app.use(express.json())
app.use(express.urlencoded({ extended: false }));



const DATABASE_URL = "mongodb+srv://deviljai1999:OGLMkuGA31Pp1FSM@cluster0.inasx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DATABASE_URL, {
  tls: true,
  tlsAllowInvalidCertificates: true, // Allows invalid certificates, bypassing SSL validation
});
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))


app.listen(2001, () => console.log(`App listening on port 2001`))






