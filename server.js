const express = require("express");
const mongoose = require("mongoose");

const port = 4000;
const app = express();

app.get("/health",(req,res)=>{
    res.status(200).send("I'm alive")
})
app.listen(port, () => {
  console.log(`app listening on at http://localhost:${port}`);
});
