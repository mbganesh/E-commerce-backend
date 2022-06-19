import morgan from "morgan";
import express from "express";
import cors from 'cors'

import Api from './Routers/Api.js'
import mongoose from "mongoose";

// PORT
const PORT = 3030

const app = express()

// body-parser
app.use(express.json())
app.use(cors())

// router
app.use('/api' , Api)

app.use(morgan('short'))


app.get('/' , (req , res) => {
    res.json({Server:"works"})
})


// db
mongoose.connect('mongodb://localhost/ECommerce' , (err) => {
    if(!err) {
        console.log('DB Connected');
    }else{
        console.log('DB not connected');
    }
})


app.listen(PORT , (err) => {
    if(!err){
        console.log('Server running on ' + PORT);
    }else{
        console.log('Server down');
    }
})