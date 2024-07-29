module.exports = (sequelize, DataTypes) => {
  const RekananPerijinan = sequelize.define(
    "RekananPerijinan",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      rekanan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nama_perijinan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      no_perijinan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      masa_berlaku: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      kualifikasi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      klasifikasi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      file_perijinan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      keterangan_akta: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
        allowNull: true,
      },
      deletedAt: {
        field: "deleted_at",
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tableName: "rekanan_perijinans",
      paranoid: true,
    }
  );
  return RekananPerijinan;
};
