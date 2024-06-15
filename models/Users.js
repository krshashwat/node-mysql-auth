module.exports = (sequelize, DataTypes) => sequelize.define(
    'users',
    {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(300),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(500),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            default: DataTypes.NOW,
            allowNull: true,
        },
        updatedAt: {
            type: DataTypes.DATE,
            default: DataTypes.NOW,
            allowNull: true,
        }
    },
    {
        tableName: 'users',
        timestamps: false,
    }
)