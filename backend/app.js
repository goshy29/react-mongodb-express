const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const HttpError = require("./models/http-error");

const placesRoutes = require("./routes/place-routes");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});

app.use("/api/places", placesRoutes); 

app.use((req, res, next) => {
    const error = new HttpError("Could not find this route", 404);
    throw error;
}); 

// This special middleware function will only be executed on the request that have an error attached!
// Will execute if any middleware in front of it throw an error!
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }

    res.status(error.code || 500).json({message: error.message || "An unknown error."});
});


mongoose
.connect("mongodb+srv://goshy:ns6erApJg73CXHLd@cluster0.mb9mxkm.mongodb.net/places?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    app.listen(5000);
})
.catch(error => {
    console.log(error);
})