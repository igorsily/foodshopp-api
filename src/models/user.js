const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    User.associate = (models) => {
        User.belongsToMany(models.Role, {
            through: 'users_roles',
            as: 'roles',
            forkey: 'user_id'
        })
    };

    User.beforeCreate(async (user, options) => {

        const hash = await bcrypt.hash(user.password, 10);

        user.password = hash;
    });

    return User;
};