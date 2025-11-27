const express = require("express");

const UserRoutes = require("./routes/user.routes")

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

