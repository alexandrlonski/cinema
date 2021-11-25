require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 8080;

const app = express(); //create server

app.get('/',(req, res) => {
 res.json({message: "server connected"})
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));