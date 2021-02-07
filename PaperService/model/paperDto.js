const mongoose=require('mongoose');

const paperDto= new mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    type : {
        type :String,
        required : true
    },
    noOfQue : {
        type :String,
        required : true
    },
    noOfAns : {
        type :String,
        required : true
    },
    quection : {
        type : Array,
        required : true
    }
});


module.exports=mongoose.model("paper",paperDto);
