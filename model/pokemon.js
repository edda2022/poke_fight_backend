const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fightResultSchema = new Schema({
  id_PlayerA: { type: Number },
  pokemon_name_playerA: { type: String },
  score_PlayerA: { type: Number },
});

module.exports = {
  FightResult: mongoose.model("FightResult", fightResultSchema),
};
