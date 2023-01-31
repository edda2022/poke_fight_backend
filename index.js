const express = require("express");
var cors = require('cors')

const app = express();
const { pokemonRouter } = require("./routes/pokemon");

app.use(express.json());
app.use(cors())

const port = 8082;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/pokemon", pokemonRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
