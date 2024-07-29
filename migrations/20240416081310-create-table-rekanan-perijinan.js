"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("rekanan_perijinans", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      rekanan_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nama_perijinan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      no_perijinan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      masa_berlaku: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      kualifikasi: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      klasifikasi: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      file_perijinan: {
        type: Sequelize.STRING,
        allowNull: true,
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

    await queryInterface.addConstraint("rekanan_perijinans", {
      type: "foreign key",
      name: "rekanan_perijinan_id",
      fields: ["rekanan_id"],
      references: {
        table: "rekanans",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("rekanan_perijinans");
  },
};
