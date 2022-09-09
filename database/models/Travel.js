module.exports = (sequelize, Sequelize) => {
  const Travel = sequelize.define(
    "Travel",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      attractionId: {
        field: "attraction_id",
        type: Sequelize.INTEGER,
        references: {
          model: "attractions",
          key: "id",
        },
      },
      title: {
        field: "title",
        type: Sequelize.STRING,
      },
      description: {
        field: "description",
        type: Sequelize.STRING,
      },
      startAt: {
        field: "start_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
      endAt: {
        field: "end_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
    {
      sequelize,
      tableName: "travels",
      underscored: true,
      freezeTableName: true,
      createdAt: "created_date",
      updatedAt: "updated_at",
    }
  );

  Travel.associate = function (models) {
    // User.hasMany(models.Contract, {
    //   as: 'contracts',
    //   foreignKey: {
    //     name: 'user_id'
    //   },
    //   onUpdate: 'CASCADE',
    //   onDelete: 'CASCADE',
    // });
  };

  return Travel;
};