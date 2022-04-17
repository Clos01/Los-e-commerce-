
// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define an id  columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
        //define product column
        product_id:{
          type: DataTypes.INTEGER,
          allowNull:false,
          primaryKey:true,
          autoIncrement: true
        },
        
    tag_id: {
      type: DataTypes.INTEGER,
      references:"tag",
      key: "id"
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
