const express = require('express');
const rootRouter = express.Router();
const ideaRouter = require('./ideaRouter')

rootRouter.use('/idea', ideaRouter)

module.exports = rootRouter