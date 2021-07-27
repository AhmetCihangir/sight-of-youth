const fs = require('fs');
const express = require('express')
const app = express()
const port = 3001
const bodyParser = require("body-parser")
const cors = require("cors")

var whitelist = ['http://localhost:3000']
var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }


app.use(cors(corsOptions))

app.use(bodyParser.json())

app.get("/allblogs",(req,res)=> {
    const blogs = JSON.parse(fs.readFileSync("blogs.json"))

    console.log(blogs)

    res.json(blogs)
})



app.listen(port, () => console.log(`Example app listening on port port!`))

