require('dotenv').config();
const mongoose = require('mongoose');

const connect_to_mongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to mongoDB');
    } catch (error) {
        console.error('Error connecting to mongoDB:', error);
        process.exit(1);
    }
};

const start_server = async (app) => {
    try {
        await connect_to_mongo();
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Listening on PORT ${process.env.PORT || 5000}`);
        });
    } catch (error) {
        console.log('Error starting server:', error);
        process.exit(1);
    }
};

module.exports = { connect_to_mongo, start_server };
