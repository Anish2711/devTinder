import express from "express"
import { User } from "./models/users.model.js";
import { dbConnect } from "./config/dataBase.js";

const app = express();
const PORT = 3000;


app.post("/signup", async (req,res)=>{

    const  user =  new User({
        firstName:"Anish",
        lastName:"Singh",
        emailId:"anish123@gmail.com",
        password:"anish@123",
        age:27,
        gender:"M"

    })

   await user.save()
   
   res.send("data add sucessfully")
   
})

dbConnect().then(()=>{
    console.log("database connected ")
    app.listen(PORT,()=>{

        console.log(`app run on  port ${PORT}`)
    })
}
).catch(()=>{
    console.log("data base is not connected ")
})

