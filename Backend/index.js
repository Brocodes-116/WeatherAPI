const express=require("express")
const cors=require('cors')
require('dotenv').config()

const app=express();
const PORT=8000;


app.use(cors())
// app.use(express.json())


app.get("/api/weather", async (req,res)=>{
    const {city}=req.query;
    try{
        const response= await fetch(`${process.env.API_KEY}&q=${city}&days=1`)

        if(!response.ok){
            console.error("Error, request responded with status  :",response.status);
            res.status(500).json({error:"Failed to fetch form server!"})            
        }
        const data=await response.json();
        console.log(data);
        res.json(data)
        

    }catch(e){
        console.error("Error :",e);
    }
})


app.listen(PORT,()=>{
    console.log("Server is running on PORT :",PORT);
})