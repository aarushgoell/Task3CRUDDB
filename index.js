
require('./src/database/db');

const express = require("express");

const UserRoutes = require("./src/routes/user.routes")

const app = express();


app.use(express.json());

app.get("/", (res) => {
    return res.status(200).json({
        message: "Server is started"
    })
})

app.use("/users", UserRoutes)


app.listen(3000, () => {
    console.log("Server started");
})




// {
//     "message": "New user added",
//     "newUser": {
//         "email": "aarushgoel200456@gmail.com",
//         "name": "aarushgoel",
//         "password": "$2b$10$WVuiXK4N/IJq7F7sid2MZOQ5YoQ.ag8qh3.MIMa.znyS89pNZL6A2",
//         "createdAt": "11-27-2025, 2:21:20 pm",
//         "_id": "692811962635b0d3cb13d9e9",
//         "__v": 0
//     }
// }