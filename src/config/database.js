require('dotenv/config')

module.exports = {

    dialect: 'postgres' ,
    host:'http://34.46.76.49',
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    define:{
      timestamps:true,
      underscored:true,
      underscoredAll:true,
    },

};
