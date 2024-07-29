"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("rekanans", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bentuk_usaha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bidang_usaha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      npwp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ktp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      no_pkp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      propinsi: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      kota: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      telp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      hp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      kode_pos: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cp_nama: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cp_email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cp_hp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      keterangan: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("rekanans");
  },
};
