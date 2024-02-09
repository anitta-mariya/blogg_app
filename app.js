const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const blogRoute=require("./controller/blogrouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anittamj24:anitta24@cluster0.8kj7aop.mongodb.net/blogDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/blog",blogRoute)

app.listen(3001,()=>{
    console.log("server running")

})