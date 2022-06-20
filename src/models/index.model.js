'use strict';
require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/clothes.model.js');
const foodModel = require('./food/food.model.js');
const Collection = require('./data-collection.js');

const userModel = require('../auth/models/users');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;
// const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
    
  }
} : {};
// const sequelize = new Sequelize(DATABASE_URL);
const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
  users: userModel(sequelize, DataTypes),
};


