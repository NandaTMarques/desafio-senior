const { MongoClient } = require('mongodb');
require('dotenv/config');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connection = () =>
    MongoClient.connect(process.env.MONGO_DB_URL, OPTIONS)
    .then((conn) => conn.db(process.env.DB_NAME))
    .catch((err) => console.error(err) && process.exit(1)); // retorna uma promise

module.exports = connection;