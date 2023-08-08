const express = require("express");
const mongoose = require("mongoose");
const PORT = 5050;

require('dotenv').config();

//requires delle routes
const postsRoute = require('./routes/posts');

const app = express();

//middleware
app.use(express.json());


// import routes
app.use("/", postsRoute);

mongoose.connect(process.env.MONGO_DB_URL);



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Errore di connessione al server!'))
db.once('open', () => {
    console.log('Database MongoDB connesso!');
});

//ultima riga
app.listen(PORT, () =>
    console.log(`Server avviato ed in ascolto sulla PORTA ${PORT}`)
);

