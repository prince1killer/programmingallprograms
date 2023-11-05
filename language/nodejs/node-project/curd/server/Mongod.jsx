const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/first-Curd').then(()=>{
    console.log("connected successfully");
}).catch((err)=>{
    console.log("fail to connect  " + err);
})

const newSchema = mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    user: {
        type : String,
        require : true,
        unique :true
        },
    email :{
        type : String,
        require : true,
        unique : true
    },
    pass:{
        type : String,
        require : true
    }

});

const collection = mongoose.model("collection",newSchema)
module.exports = collection;