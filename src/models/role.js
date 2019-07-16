
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field can't be empty"
                }
            }
        },
        description: DataTypes.STRING,
    });

    return Role;
};