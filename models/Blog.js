const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          description: {
            type: DataTypes.STRING,
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
          }
        },{
          sequelize
        }
        );

    module.exports = Blog




