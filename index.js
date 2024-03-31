const express=require("express")
// const {MongoClient}=require("mongodb")
const mongoose=require("mongoose")
const  bodyparser=require("body-parser")
const dotenv=require("dotenv")
const employeerouter=require("./routes/routes")


const app=express()
const port=process.env.port||3016

dotenv.config()
app.use(bodyparser.json())

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("databases connected sucesfully...!")})
.catch((err)=>{
    console.log("error",err)
})


app.use("/add",employeerouter)





app.listen(port,()=>{
    console.log(`server is running in ${port}`)
})