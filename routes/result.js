const express = require("express");
const fightResultRouter = express.Router();
const {
  getResults,
  createResult,
  deleteResult,
} = require("../controller/result");

fightResultRouter.get("/", getResults);
fightResultRouter.post("/", createResult);
fightResultRouter.delete("/:id", deleteResult);

module.exports = {
  fightResultRouter,
};
