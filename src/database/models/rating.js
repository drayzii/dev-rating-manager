/* eslint-disable no-unused-vars */

export default (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    quality: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    initiative: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    communication: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    professionalism: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    integration: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  }, {});
  Rating.associate = (models) => {
    Rating.belongsTo(models.User, {
      foreignKey: 'user',
      onDelete: 'CASCADE',
    });
  };
  return Rating;
};
