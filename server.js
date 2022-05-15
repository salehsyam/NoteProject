const express =require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
let port = 3000;
//Routes
const NoteRoute =require("./routes/noteRoute");


app.use(cors());

app.use('/',NoteRoute);


app.use(require('connect').bodyParser());
app.use(express.bodyParser());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))



// POST /login gets urlencoded bodies
app.post('/login',function (req, res) {
    res.send('welcome, ' + req.body.username)
  })


app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`)
})


