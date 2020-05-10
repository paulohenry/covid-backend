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
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      lat: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      long: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      cep: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rua:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero:{
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      complemento:{
        type: Sequelize.STRING,
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
      senha_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
        resposta1:Sequelize.STRING,
        resposta2: Sequelize.STRING,
        resposta3: Sequelize.STRING,
        resposta4: Sequelize.STRING,
        resposta5: Sequelize.STRING,
        resposta6: Sequelize.STRING,
        resposta6_a:Sequelize.STRING,
        resposta7: Sequelize.STRING,
        resposta8: Sequelize.STRING,
        resposta9: Sequelize.STRING,
        resposta10: Sequelize.STRING,
        resposta11: Sequelize.STRING,
        resposta12: Sequelize.STRING,
        resposta13: Sequelize.STRING,
        resposta14: Sequelize.STRING,
        resposta15: Sequelize.STRING,
        resposta16: Sequelize.STRING,
        resposta17: Sequelize.STRING,
        resposta18: Sequelize.STRING,
        resposta19: Sequelize.STRING,
        resposta20: Sequelize.STRING,
        classify:Sequelize.STRING,

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
    return queryInterface.dropTable('users');
  },
};
