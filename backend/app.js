const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/place-routes");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);


app.listen(5000);