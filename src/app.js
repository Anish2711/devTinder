const express = require("express")


const app = express();

app.get("/user",(req,res)=>{

    res.send(" get page  ")
});

app.post("/user",(req,res)=>{

    res.send(" post page  ")
});


app.put("/user",(req,res)=>{

    res.send({
        "name":"Anish ",
        "age " :16
    })
});
 
app.delete("/user",(req,res)=>{

    res.send(" delet the api  ")
});


app.use("/user",(req,res)=>{

    res.send(" test page  ")
});

app.use("/",(req,res)=>{

    res.send(" Home page  ")
});



const PORT = 3000

app.listen(PORT,()=>{

console.log(`port is running on ${PORT}`)
})