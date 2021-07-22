const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

// MiddleWare
app.use(express.json())
app.use(cors())

// Routes
app.use('/', routes.data)

// Listen on port
app.listen(PORT, () => {
    console.log(`Server Running On PORT: ${PORT}`)
})