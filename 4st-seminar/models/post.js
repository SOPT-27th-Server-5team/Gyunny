module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Post', {
    autohr: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    contents: {
      type: DataTypes.TEXT(),
      allowNull: false,
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  })
}