const Images = require("../models/images");
const { NotFoundError, UnauthenticatedError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const Users = require("../models/users");

const limit = 21;

const getImages = async (req, res, next) => {
  try {
    const queryObject = {};

    let { label } = req.query;

    if (label) {
      queryObject["$text"] = { $search: label };
    }

    const images = await Images.find(queryObject)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(StatusCodes.OK).json({ data: images, numOfHits: images.length });
  } catch (error) {
    next(error);
  }
};

const getUserImages = async (req, res, next) => {
  try {
    const user_id = req.user.userId;

    if (user_id !== req.params.userId) {
      return;
    }
    const queryObject = {
      user_id,
    };
    const { label } = req.query;

    if (label) {
      queryObject["$text"] = { $search: label };
    }

    const images = await Images.find(queryObject)
      .limit(limit)
      .sort({ createdAt: -1 });

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

module.exports = { getImages, getUserImages, uploadImage, deleteImage };
