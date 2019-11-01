
module.exports = (sequelize, DataTypes) => {
  const AverageRatings = sequelize.define('AverageRatings', {
    user: DataTypes.INTEGER,
    submitter: DataTypes.INTEGER,
    quality: DataTypes.DECIMAL,
    quantity: DataTypes.DECIMAL,
    initiative: DataTypes.DECIMAL,
    professionalism: DataTypes.DECIMAL,
    communication: DataTypes.DECIMAL,
    integration: DataTypes.DECIMAL,
    averageRating: DataTypes.DECIMAL,
  }, {});
  AverageRatings.associate = (models) => {
    // associations can be defined here
    AverageRatings.belongsTo(models.User,{
      foreignKey: 'user'
    })
  };
  return AverageRatings;
};