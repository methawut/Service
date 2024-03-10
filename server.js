const express = require('express')
const getIn_Route = require("./src/api/routes")

const app = express();
const port = 3300

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("How to access weightScale service --> end-point is Domain:port/api/weightScale/.??? ")
})

app.use("/api/weightScale/", getIn_Route)

app.listen(port, ()=>{
    console.log(`Server is now listening at port ${port}`);
})
