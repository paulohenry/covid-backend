

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('forms', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,

        },
        resposta1: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta2: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta3: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta4: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta5: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta6: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta7: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta8: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta9: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta10: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta11: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta12: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta13: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta14: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta15: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta16: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta17: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta18: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta19: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        resposta20: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        classify:{
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

      return queryInterface.dropTable('forms');

  }
};
