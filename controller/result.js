const { FightResult } = require("../model/pokemon");
require("../db");

const getResults = async (req, res) => {
  try {
    const fightResults = await FightResult.find({});
    res.json(fightResults);
  } catch (err) {
    res.status(500).send(err.messages);
    console.log(err)
  }
};

// const getResult = async (req, res) => {
//     try {
//       const fightResult = await FightResult.find({});
//       res.json(fightResult);
//     } catch (err) {
//       res.status(500).send(err.messages);
//       console.log(err)
//     }
//   };

const createResult = async (req, res) => {
    console.log(req.body)
    const { id_PlayerA, pokemon_name_playerA, id_PlayerB, pokemon_name_playerB, scorePlayerA, scorePlayerB} = req.body;
    try {
      const fightResult = await FightResult.create({id_PlayerA, pokemon_name_playerA, id_PlayerB, pokemon_name_playerB, scorePlayerA, scorePlayerB});
      res.json(fightResult);
    } catch (err) {
      res.status(500).send(err.messages);
      console.log(err)
    }
  };

  const deleteResult = async (req, res) => {

    const {id} = req.params
         try {
           const fightResult = await FightResult.findByIdAndDelete({_id: id});
           res.json(fightResult);
         } catch (err) {
           res.status(500).send(err.messages);
           console.log(err)
         }
       };

module.exports = {
  getResults,
  createResult,
  deleteResult
};
