const express =require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
let port = 3000;
//Routes
const NoteRoute =require("./routes/noteRoute");



app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

app.use("/api/v1" , NoteRoute);



app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`)
})


