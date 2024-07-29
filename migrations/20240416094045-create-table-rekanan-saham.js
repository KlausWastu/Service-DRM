"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("rekanan_sahams", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      rekanan_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nama_pt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      porsi_saham: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      direksi: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      komisaris: {
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

    await queryInterface.addConstraint("rekanan_sahams", {
      type: "foreign key",
      name: "rekanan_saham_id",
      fields: ["rekanan_id"],
      references: {
        table: "rekanans",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("rekanan_sahams");
  },
};
