const express = require("express")


const app = express();


app.use("/test",(req,res)=>{

    res.send(" Hello to the world ")
});

const PORT = 3000

app.listen(PORT,()=>{

console.log(`port is running on ${PORT}`)
})