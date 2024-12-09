// const { DataTypes,Model }=require("sequelize");
// const connection =require("../../dbConnection")
// const {v4:uuid}=require("uuid")
// const vendors=require("./vendors")

// class products extends Model{}
// //1.{} ==> database column name and thier attributes,constraints & types  &
// //2.{} ==>
//     products.init({ 
//         productsId:{
//         primaryKey : true,
//         type : DataTypes.STRING(60), //default length of String is 255 and we can define in ()
//     },
//     productname:{
// type:DataTypes.STRING(),
// allowNull:false,
//     },
//     productDescription:{
//         type:DataTypes.TEXT
//     },
//     vendorId:{
//          type:DataTypes.STRING(),
//          allowNull:false,
//          references:{
//             model:vendors,
//             key:"venderId", 
//          }
//     },
// },
// {
//     name : "products", // if you dont provide it will save class name for table name 
//     timestamps : true,//creadted at & updaed at
//     paranoid : true ,//add time of delete in deletedAt
//     sequelize : connection

// });

// products.beforeCreate(async (product)=>{
//     product.productId=uuid();
// })

// module.exports =products;




const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const vendors = require("./vendors")
const { v4: uuid } = require("uuid")

class products extends Model { }
//1.{} ==> database column name and thier attributes,constraints & types  &
//2.{} ==>
products.init({
    productId: {
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
    vendorId: {
        type: DataTypes.STRING(),
        allowNull: false,
        references:{
            model:vendors,
            key:"vendorId"
        }
    }
},
    {
        name: "products", // if you dont provide it will save class name for table name 
        timestamps: true,//creadted at & updaed at
        paranoid: true,//add time of delete in deletedAt
        sequelize: connection

    });

products.beforeCreate(async (product) => {
    product.productId = uuid();
})

module.exports = products;
