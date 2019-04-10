const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express();

app.use(express.static(path.join(__dirname, 'static')))
app.use(cors());

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(process.env.PORT, () => {
    console.log('listening')
})