const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.DB_URL.toString())
    .then(() => {
        console.log("Database connected");
    })
    .catch(err => console.error(err));

