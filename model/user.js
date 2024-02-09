const mongoose=require("mongoose")

const usermodelSchema=mongoose.Schema(
    {
        name:String,
        age:String,
        address:String,
        phonenumber:String,
        pincode:String,
        emailid:String,
        password:String
    }
)

module.exports=mongoose.model("blog",usermodelSchema)

