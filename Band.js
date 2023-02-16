const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
let Band;
//  - The `Band` model should have name and genre properties, both of which are strings.
const sequelize = require("./db"); // Importing my connection from db.js
const { DataTypes } = require("sequelize");

const Restaurant = sequelize.define("Band", {
  name: DataTypes.STRING,
  genre: DataTypes.STRING,
});
module.exports = {
    Band
};