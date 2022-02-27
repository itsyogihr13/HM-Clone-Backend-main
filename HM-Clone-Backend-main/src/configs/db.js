const mongoose = require("mongoose");

const connect = ()=>{
    mongoose.connect("mongodb+srv://mahindra:mahi_123@cluster0.ms95s.mongodb.net/hmbackend");
}

module.exports = connect;