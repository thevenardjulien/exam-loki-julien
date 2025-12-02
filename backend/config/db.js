// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        console.log(`url de la page dans les var env ${process.env.MONGO_URI}`);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connecté');
    } catch (err) {
        // console.error(err.message);
        // process.exit(1);
        console.log(`Erreur de connexion à MongoDB: ${err.message}`);
    }
};

module.exports = connectDB;
