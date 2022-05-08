const Images = require("../models/images");
const { BadRequestError, NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const getImages = async (req, res, next) => {
  try {
    const user = req.user.userId;
    const queryObject = {};

    let { label } = req.query;

    if (label) {
      queryObject["$text"] = { $search: label };
    }

    const images = await Images.find(queryObject).limit(21).sort({ createdAt: -1 });

    console.log(images);

    res.status(StatusCodes.OK).json({ data: images, numOfHits: images.length });
  } catch (error) {
    next(error);
  }
};

const uploadImage = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const image = await Images.create({ ...req.body, user_id: userId });
    res.status(StatusCodes.CREATED).json({ image });
  } catch (error) {
    next(error);
  }
};

const deleteImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const image = await Images.findByIdAndRemove({ _id: id, user_id: userId });

    if (!image) throw new NotFoundError(`No image with id: ${id}`);

    res.status(StatusCodes.OK).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { getImages, uploadImage, deleteImage };
