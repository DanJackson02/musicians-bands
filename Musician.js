const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
//  - The `Musician` model should have name and instrument properties, both of which are strings.

const { DataTypes } = require("sequelize");

const Musician = sequelize.define("Musician", {
  name: DataTypes.STRING,
  instrument: DataTypes.STRING,
});
module.exports = {
    Musician
};