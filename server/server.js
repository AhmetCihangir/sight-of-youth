const fs = require('fs');
const express = require('express')
const app = express()
const port = 3001

app.post('/blog', (req, res) => {
    console.log(req.body)

    // fs.writeFileSync("")
})



app.listen(port, () => console.log(`Example app listening on port port!`))

