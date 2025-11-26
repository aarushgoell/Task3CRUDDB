const express = require("express");
const { User } = require("./db/db");
const { UserSchema } = require("./Validation/userzod");
const { hashPass } = require("./Service/hashing");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");

const mongoose = require("mongoose");


dotenv.config();
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is started"
    })
})

app.get("/fetch", async (req, res) => {
    try {
        const allUsers = await User.find().select({ name: 1, email: 1, _id: 0, createdAt: 1 });
        res.status(200).json({
            allUsers
        })
    }
    catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
})

app.post("/", async (req, res) => {

    const inpCheck = UserSchema.safeParse(req.body);
    if (!inpCheck.success) {
        return res.status(401).json({
            message: "Data is invalid"
        })
    }

    const { name, email, password } = req.body;
    const userExistCheck = await User.find({ email: email });
    if (userExistCheck.length > 0) {
        return res.status(200).json({
            message: "User already exist"
        })
    }

    try {
        const hashedPass = await hashPass(password);
        const newUser = await User.create({
            name, email, password: hashedPass
        })
        newUser
        return res.status(201).json({
            newUser
        })
    }
    catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
})

app.put("/:id", async (req, res) => {

    const userId = req.params.id;
    const name = req.body.name;

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, {
            name: name
        }, { new: true })
        res.status(400).json({
            updatedUser
        })
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

app.delete("/:id", async (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    const objectId = new mongoose.Types.ObjectId(userId);
    console.log(objectId);
    try {
        const updatedUser = await User.findByIdAndDelete(objectId);
        console.log(updatedUser);
        if (updatedUser) {
            return res.status(200).json({
                message: "User is removed"
            })
        }
        else {
            return res.status(200).json({
                message: "User doesnt exist"
            })
        }
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

app.listen(3000, () => {
    console.log("Server started");
})


// {
//     "name" : "aarushgoel",
//      "email" : "aarushgoel2004@gmail.com",     
//      "password" : "aarushgoel1@."
// }