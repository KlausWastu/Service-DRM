module.exports = (sequelize, DataTypes) => {
  const Rekanan = sequelize.define(
    "Rekanan",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bentuk_usaha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bidang_usaha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      npwp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ktp: {
        type: DataTypes.NUMBER,
        allowNull: true,
      },
      no_pkp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      propinsi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kota: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      telp: {
        type: DataTypes.NUMBER,
        allowNull: true,
      },
      hp: {
        type: DataTypes.NUMBER,
        allowNull: true,
      },
      kode_pos: {
        type: DataTypes.NUMBER,
        allowNull: true,
      },
      cp_nama: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cp_email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cp_hp: {
        type: DataTypes.NUMBER,
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
      tableName: "rekanans",
      paranoid: true,
    }
  );
  return Rekanan;
};
