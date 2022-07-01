const express = require("express");
const app = express();

app.get('/', (req,res) => {
  res.send("welcome to the home page")
});

const nport = process.env.port || 3001
app.listen(nport, () => {
    console.log('Server started')
})