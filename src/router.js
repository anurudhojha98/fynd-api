const express = require("express")

const userController = require("../src/controller/user")
const movieController = require("../src/controller/movie")


const router = express.Router();

// ------------------user routes----------------------------
router.post(`/user/login`, userController.login);


// ------------------movie routes----------------------------
router.post(`/movie-list`, movieController.list);
router.post(`/movie`, movieController.post);
router.put(`/movie/:id`, movieController.put);
router.delete(`/movie/:id`, movieController.delete);

module.exports = router;
