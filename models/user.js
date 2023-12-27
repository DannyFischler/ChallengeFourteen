module.exports = (sequelize, DataTypes) => {
    class User extends sequelize.Sequelize.Model {}
  
    User.init({
     
    }, {
      sequelize,
      modelName: 'User',
     
    });
  
    return User;
  };
  