"use strict";
const Sequelize = require("sequelize");

const Block = require("./Block");
const Tx = require("./Tx");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.block = Block;
db.tx = Tx;

Block.init(sequelize);
Tx.init(sequelize);

module.exports = db;