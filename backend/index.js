import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); //menerima req dalam format json

app.listen(5002, ()=>  
    console.log('Server up and running...'));  