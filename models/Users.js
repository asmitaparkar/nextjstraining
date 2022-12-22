const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userid:{
        type:Number,
        unique: true,
        required : true
    }
})