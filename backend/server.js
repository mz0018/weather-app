const express = require('express');
const connect_to_mongo = require('./config/connection');
const ConnectionRoutes = require('./routes/connectionRoutes');

const app = express();

app.use('/api', ConnectionRoutes);

connect_to_mongo.start_server(app);
