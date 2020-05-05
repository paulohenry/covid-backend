'use-strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      primeiro_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ultimo_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      celular: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique:true
      },
      cep: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lat: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      long: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      senha_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  },
};
