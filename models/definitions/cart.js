const {DataTypes}=require("express");

cart.init({
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    }, {
      timestamps: true,
    });
    module.exports=cart;