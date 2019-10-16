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
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        isIn: {
          args: [
            [-2, -1, 0, 1, 2],
          ],
          msg:
            'The rating has to be between -2 and 2',
        },
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        isIn: {
          args: [
            [-2, -1, 0, 1, 2],
          ],
          msg:
            'The rating has to be between -2 and 2',
        },
      },
    },
    initiative: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        isIn: {
          args: [
            [-2, -1, 0, 1, 2],
          ],
          msg:
            'The rating has to be between -2 and 2',
        },
      },
    },
    communication: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        isIn: {
          args: [
            [-2, -1, 0, 1, 2],
          ],
          msg:
            'The rating has to be between -2 and 2',
        },
      },
    },
    professionalism: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        isIn: {
          args: [
            [-2, -1, 0, 1, 2],
          ],
          msg:
            'The rating has to be between -2 and 2',
        },
      },
    },
    integration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        isIn: {
          args: [
            [-2, -1, 0, 1, 2],
          ],
          msg:
            'The rating has to be between -2 and 2',
        },
      },
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
