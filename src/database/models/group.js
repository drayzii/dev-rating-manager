/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    lf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    engineers: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  }, {});
  Group.associate = (models) => {
    Group.belongsTo(models.User, {
      foreignKey: 'lf',
      onDelete: 'CASCADE',
    });
  };
  return Group;
};
