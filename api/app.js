const express = require('express');
var cors = require('cors')


const app = express();
const PORT = 8000;
app.use(cors())
app.get('/', (req, res)=>{
    res.status(200);
    res.send([{id:1, data:'dheeraj'}]);
});

app.post('/saveTodos', (req, res)=>{
    res.status(200);
    res.send([{id:1, data:'dheeraj'}]);
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);