const Place = require("../models/place-model");

const HttpError = require("../models/http-error");

async function getAllPlaces(req, res, next) {
  let places;
  try {
    places = await Place.find();
  } catch (err) {
    const error = new HttpError("Fetching all places failed.", 500);
    return next(error);
  }

  res.json({ places });
}

async function getPlaceById(req, res, next) {
  const placeId = req.params.placeId;
  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError("Fetching place failed.", 500);
    return next(error);
  }

  if (!place) {
    const error = new HttpError("Place not found.", 404);
    return next(error);
  }

  res.json({ place });
}

async function createPlace(req, res, next) {
  const { title, place, country, image, description } = req.body;

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
    const error = new HttpError("Creating place failed!.", 500);
    return next(error);
  }

  res.status(201).json({ place: createdPlace });
}

async function updatePlace(req, res, next) {
  const placeId = req.params.placeId;
  const { title, place, country, image, description } = req.body;

  let updatedPlace;
  try {
    updatedPlace = await Place.findByIdAndUpdate(
      placeId,
      { title, place, country, image, description },
      { new: true }
    );
  } catch (err) {
    const error = new HttpError("Updating place failed!", 500);
    return next(error);
  }

  if (!updatedPlace) {
    const error = new HttpError("Place not found.", 404);
    return next(error);
  }

  res.json({ place: updatedPlace });
}

async function deletePlace(req, res, next) {
  const placeId = req.params.placeId;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError("Fetching place failed!", 500);
    return next(error);
  }

  if (!place) {
    const error = new HttpError("Place not found.", 404);
    return next(error);
  }

  try {
    await place.deleteOne({ _id: placeId });
  } catch (err) {
    const error = new HttpError("Deleting place failed!", 500);
    return next(error);
  }

  res.status(200).json({ message: "Place deleted." });
}

exports.getAllPlaces = getAllPlaces;
exports.getPlaceById = getPlaceById;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;