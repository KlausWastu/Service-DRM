"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("rekanan_aktas", {
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
      no_akta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggal_akta: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nama_notaris: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      keterangan_akta: {
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

    await queryInterface.addConstraint("rekanan_aktas", {
      type: "foreign key",
      name: "rekanan_akta_id",
      fields: ["rekanan_id"],
      references: {
        table: "rekanans",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("rekanan_aktas");
  },
};
