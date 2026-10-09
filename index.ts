import express from "express";
import os from "os";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/cpu",(req,res) => {
    for(let i=0; i<1000000000; i++){
        Math.random();
    }
    res.send("Done");
})

app.get("/os",(req,res) => {
    res.send(os.hostname())
})

app.get("/health", (req, res) => {
  res.send("OK");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});