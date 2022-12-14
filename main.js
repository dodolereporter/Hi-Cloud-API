const express = require("express");
const app = express()
const port = 8080

const { connection } = require("./config/database");

const indexRoute = require("./routes/index")
const weatherRoute = require("./routes/weather")
const {getWeatherFromId} = require("./services/weatherService");

app.use("/", indexRoute)
app.use(express.json());
app.use("/api/weather", weatherRoute)


app.listen(port, () => {  console.log("Application démarée sur le port : " + port)});
