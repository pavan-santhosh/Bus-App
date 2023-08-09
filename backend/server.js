const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const CustomerModel = require('./models/Customer.js')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://pavansanthosh24042002:anjCoeVcmVXPy0eY@cluster0.6omkfcw.mongodb.net/")

let port = process.env.PORT;
    
if(port==null||port==''){
    port = 7000;
}

app.post("/login", (req,res) => {
    const {email, password} = req.body;
    CustomerModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        } else{
            res.json("No record exists")
        }
    })
})

app.post('/register', (req,res) => {
    CustomerModel.create(req.body)
    .then(customers=> res.json(customers)) // customers given in models -> Customer.js
    .catch(err=>res.json(err))
})

console.log('hello')

app.listen(port, () => {
    console.log(port)
})