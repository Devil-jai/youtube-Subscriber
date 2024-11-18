const express = require('express')
const app = require('./src/app');
const mongoose = require('mongoose')
// const cors = require('cors');
const port = process.env.port || 4001;

// app.use(cors({
//     origin: 'https://youtube-subscriber-kappa.vercel.app/',
//     methods: ['GET'],
//     credentials: true,
//   }));


app.use(express.json())
app.use(express.urlencoded({ extended: false }));



const DATABASE_URL = "mongodb+srv://deviljai1999:OGLMkuGA31Pp1FSM@cluster0.inasx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))


app.listen(port, () => console.log(`App listening on port ${port}`))






