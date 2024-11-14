const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')


const DATABASE_URL = "mongodb+srv://deviljai1999:OGLMkuGA31Pp1FSM@cluster0.inasx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DATABASE_URL, {
    tls: true,
    tlsAllowInvalidCertificates: true, // Allows invalid certificates, bypassing SSL validation
  });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})

    await subscriberModel.insertMany(data)
    await mongoose.disconnect();

}
refreshAll()