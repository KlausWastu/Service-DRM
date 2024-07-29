module.exports = (sequelize, DataTypes) => {
  const RekananSaham = sequelize.define(
    "RekananSaham",
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
      nama_pt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      porsi_saham: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      direksi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      komisaris: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      keterangan: {
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
      paranoid: true,
      tableName: "rekanan_sahams",
    }
  );
  return RekananSaham;
};
