const express = require('express')
const app = require('express')();
app.get("/api",(req , res) => {
    res.json({"message":["jello"]})
})
app.listen(5000,()=>{console.log("server started on port 5000")})