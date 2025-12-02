// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();
const logger = require('../utils/logger');

const connectDB = async () => {
    try {
        logger.info(`url de la page dans les var env ${process.env.MONGO_URI}`);
        await mongoose.connect(process.env.MONGO_URI);
        logger.info('MongoDB connecté');
    } catch (err) {
        // console.error(err.message);
        // process.exit(1);
        logger.error(`Erreur de connexion à MongoDB: ${err.message}`);
    }
};

module.exports = connectDB;
