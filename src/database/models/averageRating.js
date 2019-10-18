
module.exports = (sequelize, DataTypes) => {
  const AverageRating = sequelize.define('average_rating', {
    user: DataTypes.INTEGER,
    submitter: DataTypes.INTEGER,
    quality: DataTypes.DECIMAL,
    quantity: DataTypes.DECIMAL,
    initiative: DataTypes.DECIMAL,
    proffesionalisim: DataTypes.DECIMAL,
    communication: DataTypes.DECIMAL,
    integration: DataTypes.DECIMAL,
    averageRating: DataTypes.DECIMAL,
  }, {});
  AverageRating.associate = (models) => {
    // associations can be defined here
  };
  return AverageRating;
};