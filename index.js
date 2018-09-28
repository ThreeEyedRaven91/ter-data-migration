#!/usr/bin/env node

const fs = require('fs');
const Sequelize = require('sequelize');
const SequelizeAuto = require('sequelize-auto');
const config = require('./.tdm_config/profile');
const profile = config.profiles[config.default];

var auto = new SequelizeAuto(profile.database, profile.user, profile.password, {
  host: profile.host,
  dialect: profile.dialect,
  directory: false, // prevents the program from writing to disk
  // port: 'port',
  additional: {
    timestamps: false
    //...
  },
  // tables: ['table1', 'table2', 'table3']
  //...
});

var sequelize = new Sequelize(profile.database, profile.user, profile.password, {
  host: profile.host,
  dialect: profile.dialect,
  // port: 'port',
  define: {
    timestamps: false
  },
  // tables: ['table1', 'table2', 'table3']
  //...
});

auto.run(function (err) {
  if (err) throw err;

  const models = {};

  Object.keys(auto.tables).map(table => {
    models[table] = sequelize.define(table, auto.tables[table]);
  })

  if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
  }

  Object.keys(models).map(modelName => {
    models[modelName].findAll().then(rows => {
      fs.writeFileSync(`./data/${modelName}.json`, JSON.stringify(rows));
    });
  });
});