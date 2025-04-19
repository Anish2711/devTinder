import express from "express"
import { User } from "./models/users.model.js";
import { dbConnect } from "./config/dataBase.js";

const app = express();
app.use(express.json())
const PORT = 3000;


app.post("/signup", async (req,res)=>{

    const  user =  new User(req.body)

   await user.save()
   
   res.send("data add sucessfully")
   
});

app.get("/user",  async (req,res) => {
    const UserEmailId = req.body.emailId;
    
    try {
        const user = await User.find({emailId:UserEmailId});
        res.send(user)
    } catch (error) {
        res.status(400).send("something went wrong")
    }
});

app.delete("/delete", async (req,res) => {
    const userId = req.body.userId;

    try {
        const user = await User.findByIdAndDelete(userId);
        res.send("data delete succesfully ")
    } catch (error) {
        res.status(404).send("data not found")
    }
})

app.get("/feed", async(req,res)=>{
    
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(404).send("something went wrong")
    }

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

