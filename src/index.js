const express = require('express')
const app = require('./app');
const mongoose = require('mongoose')
// const port = 2000

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://deviljai1999:RiMoO4FKfdrqw1La@cluster0.fijzqch.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(2001, () => console.log(`App listening on port 2001`))
