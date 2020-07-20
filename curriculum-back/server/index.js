const express = require('express')
const helmet = require('helmet')
const routes = require('./api')
let cors = require('cors')
require('../db')

const app = express()
const port = 5000

app.use(express.json())
app.use(helmet())
app.use(cors())



app.use('/api/v1', routes)


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))