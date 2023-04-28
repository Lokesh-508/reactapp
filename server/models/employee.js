'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    Name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    bloodGroup: DataTypes.STRING,
    gender: DataTypes.STRING,
    phno: DataTypes.INTEGER,
    position: DataTypes.STRING,
    medicalHistory: DataTypes.STRING,
    canDonate: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};