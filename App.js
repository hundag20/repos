const { Model } = require("objection");
const express = require("express");
const { knexInstance } = require("./utils/knexInstance");
const app = express();
// require("./controllers/ad.controller");
// require("./controllers/Bot.controller");

// Give the knex instance to objection.
Model.knex(knexInstance);
app.listen(3008, () => console.log(`app listening on port 3008`));

module.exports = { app, Model };
