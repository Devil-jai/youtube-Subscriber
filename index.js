const express = require('express')
const app = require('./src/app');
const mongoose = require('mongoose')
const cors = require('cors');
const port = process.env.PORT || 4001;
require('dotenv').config()

app.use(cors({
    origin: 'https://youtube-subscriber-dcf4q3eey-devil-jais-projects.vercel.app/',
    methods: ['GET'],
    credentials: true,
  }));


app.use(express.json())
app.use(express.urlencoded({ extended: false }));




mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true,
   useUnifiedTopology: true ,
   serverSelectionTimeoutMS: 10000, });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))


app.listen(port, () => console.log(`App listening on port ${port}`))






