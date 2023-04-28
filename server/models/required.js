'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Required extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Required.init({
    member: DataTypes.INTEGER,
    isUrgent: DataTypes.BOOLEAN,
    contact: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Required',
  });
  return Required;
};