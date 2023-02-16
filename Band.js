const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
//  - The `Band` model should have name and genre properties, both of which are strings.
const { DataTypes } = require("sequelize");

const Band = sequelize.define("Band", {
  name: DataTypes.STRING,
  genre: DataTypes.STRING,
});
module.exports = {
    Band
};