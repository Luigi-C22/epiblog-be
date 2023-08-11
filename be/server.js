const express = require("express");
const mongoose = require("mongoose");
const logger = require("./middlewares/logger");

const PORT = 5050;

require("dotenv").config();

const app = express();

//requires delle routes
const postsRoute = require("./routes/posts");
//const authorsRoute = require("./routes/authors");


//middleware
app.use(express.json());
app.use(logger);

// import routes
app.use("/", postsRoute);
//app.use("/", authorsRoute);

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

