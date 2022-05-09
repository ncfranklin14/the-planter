const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Gallery extends Model {}

Gallery.init