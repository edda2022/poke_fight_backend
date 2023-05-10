const express = require("express");
var cors = require("cors");
require("./db");
require("dotenv/config");
require("dotenv").config();

const app = express();
const { pokemonRouter } = require("./routes/pokemon");
const { fightResultRouter } = require("./routes/result");

app.use(express.json());
// app.use(cors())
app.use(
  cors({
    origin: ["https://pokefight-j9bg.onrender.com/", "http://localhost:3000"],
    credentials: true,
  })
);

const port = 8082;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/pokemon", pokemonRouter);
app.use("/fightresult", fightResultRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
