module.exports = {

    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    password:'docker',
    database:'covidbase',
    define:{
      timestamps:true,
      underscored:true,
      underscoredAll:true,
    },
};
