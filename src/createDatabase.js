const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')


const DATABASE_URL = "mongodb+srv://deviljai1999:RiMoO4FKfdrqw1La@cluster0.fijzqch.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})

    await subscriberModel.insertMany(data)
    await mongoose.disconnect();

}
refreshAll()