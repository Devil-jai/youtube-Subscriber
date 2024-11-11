
const express = require('express');
const app = express()
const path = require("path")
const SubscriberModel = require("./models/subscribers")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})

app.get("/subscribers", async (req, res, next) => {
    try {
        let subscribers = await SubscriberModel.find();
        res.status(200).json(subscribers);
    } catch (err) {
        res.status(400);
        next(err);
    }
});

app.get('/subscribers/names', (req,res)=>{
    try{
        SubscriberModel.find({},{name:1,subscribedChannel:1,_id:0})
        .then((subscriber)=>{
            res.status(200).json(subscriber)
        })
        .catch((err)=>{
            res.status(400).json({message:err.message})
        })
    } catch (err){
        res.status(400).json({message:err.message})
    }
})

app.get("/subscribers/:id", (req, res) => {
    try {
      const id = req.params.id; 
      SubscriberModel.findById(id)
      .then((subscriber)=>{
        res.status(200).json({subscriber})
      })
      .catch((err)=>{
        res.status(400).json({message:err.message})
      }) 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  });


app.use((req, res) => {
    res.status(404).json({ message: "Error - Route not found" }); // Send a JSON response with a status of 404 (Not Found)
  });



module.exports = app;
