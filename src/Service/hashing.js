
const bcrypt = require("bcryptjs");

const salt = 10;

function hashPass(pass) {

    return bcrypt.hash(pass, salt);

}

module.exports = {
    hashPass
}