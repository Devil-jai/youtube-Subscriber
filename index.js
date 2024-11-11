const express = require('express')
const app = require('./src/app');
const mongoose = require('mongoose')
const cors = require('cors');
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: 'https://youtube-subscriber-7ic7dknuh-devil-jais-projects.vercel.app/'
  }));


const DATABASE_URL = "mongodb+srv://deviljai1999:RiMoO4FKfdrqw1La@cluster0.fijzqch.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))


app.listen(2001, () => console.log(`App listening on port 2001`))






