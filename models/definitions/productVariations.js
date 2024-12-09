
const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
 const products=require("./products")
const { v4: uuid } = require("uuid")

class productVariations extends Model { }
//1.{} ==> database column name and thier attributes,constraints & types  &
//2.{} ==>
    productVariations.init({
        productsVariationId: {
        primaryKey: true,
        type: DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
    productname: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    productDescription: {
        type: DataTypes.STRING()
    },
    productId: {
        type: DataTypes.STRING(),
        allowNull: false,
        references:{
            model:products,
            key:"productId"
        }
    }
},
    {
        name: "productVariations", // if you dont provide it will save class name for table name 
        timestamps: true,//creadted at & updaed at
        paranoid: true,//add time of delete in deletedAt
        sequelize: connection

    });

    productVariations.beforeCreate(async (productVariation) => {
        productVariation.productVariationId = uuid();
})

module.exports = productVariations;
