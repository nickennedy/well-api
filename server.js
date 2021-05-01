const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

// MiddleWare
app.use(express.json())
app.use(cors())

// Routes
app.get('/', (req,res) => {
    res.send("Tim's Well Monitor")
})

app.use('/api/data', routes.data)

// Listen on port
app.listen(PORT, () => {
    console.log(`Server Running On PORT: ${PORT}`)
})