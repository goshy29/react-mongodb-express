const Place = require("../models/place-model");

async function getAllPlaces(req, res, next) {
    let places;
    try {
      places = await Place.find();
    } catch (err) {
      return res.status(500).json({message: "Fetching places failed!"});
    }

    res.json({places});
}

async function getPlaceById(req, res, next) {
    const placeId = req.params.placeId;
    let place;
    try {
      place = await Place.findById(placeId);
    } catch (err) {
      return res.status(500).json({message: "Fetching place failed!"});
    }
  
    if (!place) {
      return res.status(404).json({message: "Place not found."});
    }
  
    res.json({place});
}

async function createPlace(req, res, next) {
    const {title, place, country, image, description} = req.body;
  
    const createdPlace = new Place({
      title,
      place,
      country,
      image,
      description
    });
  
    try {
      await createdPlace.save();
    } catch (err) {
      return res.status(500).json({message: "Creating place failed!"});
    }
  
    res.status(201).json({place: createdPlace});
}

async function updatePlace(req, res, next) {
    const placeId = req.params.placeId;
    const {title, place, country, image, description} = req.body;
  
    let updatedPlace;
    try {
      updatedPlace = await Place.findByIdAndUpdate(
        placeId,
        {title, place, country, image, description},
        {new: true}
      );
    } catch (err) {
      return res.status(500).json({message: "Updating place failed!"});
    }
  
    if (!updatedPlace) {
      return res.status(404).json({message: "Place not found."});
    }
  
    res.json({place: updatedPlace});
}

async function deletePlace(req, res, next) {
    const placeId = req.params.placeId;
  
    let place;
    try {
      place = await Place.findById(placeId);
    } catch (err) {
      return res.status(500).json({message: "Fetching place failed!"});
    }
  
    if (!place) {
      return res.status(404).json({message: "Place not found."});
    }
  
    try {
      await place.remove();
    } catch (err) {
      return res.status(500).json({message: "Deleting place failed!"});
    }
  
    res.status(200).json({message: "Place deleted."});
}

exports.getAllPlaces = getAllPlaces;
exports.getPlaceById = getPlaceById;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;