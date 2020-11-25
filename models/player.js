'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.belongsTo(models.Users, { foreignKey: "userId" })
    }
  };
  Player.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    team: DataTypes.STRING,
    age: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};