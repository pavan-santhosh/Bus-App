const mongoose = require('mongoose')

const CustomerScheme = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const CustomerModel = mongoose.model("customers", CustomerScheme)

module.exports = CustomerModel