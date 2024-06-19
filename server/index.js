const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes'); 
const db = require('./config/database'); 

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Welcome to the TODO App');
});


app.use('/tasks', taskRoutes);



app.use((err, req, res, next) => {
    console.error('Error stack:', err.stack);
    console.error('Error message:', err.message);
    res.status(500).send('Something went wrong!');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
