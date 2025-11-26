const mongoose = require("mongoose");

const moment = require("moment");
const dotenv = require("dotenv");
dotenv.config();
var d = new Date();

var datee = moment(d).format("MM-DD-YYYY, h:mm:ss a");

mongoose.connect(process.env.DB_URL.toString());

const UserSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: datee
    }
})

const User = new mongoose.model("User", UserSchema);

module.exports = {
    User
}

