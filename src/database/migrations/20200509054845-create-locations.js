

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('positions', {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement:true
            },user_celular:{
              type:Sequelize.STRING,
              references:{model:'users', key:'celular'},
              onUpdate:'CASCADE',
              onDelete:'CASCADE',
              allowNull:true
            },
            lat: {
              type: Sequelize.DOUBLE,
              allowNull: false,
            },
            long: {
              type: Sequelize.DOUBLE,
              allowNull: false,
            },
            bairro:{
              type: Sequelize.STRING,
              allowNull: false,
            },
            cidade:{
              type: Sequelize.STRING,
              allowNull: false,

            },
            estado:{
              type: Sequelize.STRING,
              allowNull: false,

            },
            pais:{
              type: Sequelize.STRING,
              allowNull: false,

            },
            created_at: {
              type: Sequelize.DATE,
              allowNull: false,
            },
            updated_at: {
              type: Sequelize.DATE,
              allowNull: false,
            },
          });

  },

  down: (queryInterface) => {


      return queryInterface.dropTable('positions');

  }
};
