const express = require("express");

const router = express.Router();


const placesController = require("../controllers/place-controller");

router.get("/", placesController.getAllPlaces);

router.get("/:placeId", placesController.getPlaceById);

router.post("/", placesController.createPlace);

router.patch("/:placeId", placesController.updatePlace);

router.delete("/:placeId", placesController.deletePlace);


module.exports = router;