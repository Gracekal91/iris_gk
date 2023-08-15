const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3600;
const app = express();
const cors = require('cors');


app.use(cors())
app.use('/api/v1', require('./routes/index'));

app.listen(PORT,() =>{
    console.log(`App is running on port ${PORT}`)
});
