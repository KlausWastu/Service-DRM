module.exports = (sequelize, DataTypes) => {
  const RekananAkta = sequelize.define(
    "RekananAkta",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      rekanan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      no_akta: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tanggal_akta: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      nama_notaris: {
        type: DataTypes.STRING,
        allowNull: false,
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
      timpestamp: true,
      tableName: "rekanan_aktas",
      paranoid: true,
    }
  );
  return RekananAkta;
};
