require("dotenv").config()
const express = require("express")
const path = require("path")
const cors = require("cors")
const {Sequelize} = require("sequelize")
const { appendFile } = require("fs")
const app = express()
const sequelize = new Sequelize(process.env.DATABASE_URL, "garage_saling_db_user", "APzxGrZnvdTplTfKkktacdEsIPJk4SDT", {
    dialect: "postgres",
    dialectOptions: {
        // ssl: {
        //     rejectUnauthorized: false
        // }
    }
})

app.use(express.static(path.join(__dirname, "build")))
app.use(cors())
app.use(express.json())

//PAGE CORRECTION

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.get("/c/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

//

app.listen("3001")