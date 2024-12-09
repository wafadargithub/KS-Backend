// const { DataTypes, Model } = require("sequelize");
// const connection = require("../../dbConnection")
// const { v4: uuid } = require("uuid")

// class attributes extends Model { }
// //1.{} ==> database column name and thier attributes,constraints & types  &
// //2.{} ==>
// attributes.init({
//     attributeId: {
//         primaryKey: true,
//         type: DataTypes.STRING(60), //default length of String is 255 and we can define in ()
//     },
//     attributeId: {
//         type: DataTypes.STRING(),

//     },
//     name: {
//         type: DataTypes.STRING(),
//     },
//     value: {
//         type: DataTypes.STRING(),

//     },
//     productDescription: {
//         type: DataTypes.TEXT
//     }
// },
//     {
//         name: "attributes", // if you dont provide it will save class name for table name 
//         timestamps: true,//creadted at & updaed at
//         paranoid: true,//add time of delete in deletedAt
//         sequelize: connection

//     });

// attributes.beforeCreate(async (attribute) => {
//     attributes.attributeId = uuid();
// })

// module.exports = attributes;




const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection")
const { v4: uuid } = require("uuid")

class attributes extends Model { }
//1.{} ==> database column name and thier attributes,constraints & types  &
//2.{} ==>
attributes.init({
    attributeId: {
        primaryKey: true,
        type: DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
    name: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    value: {
        type: DataTypes.STRING(),
         
    }, 
   
    productDescription: {
        type: DataTypes.STRING()
    },
},
    {
        name: "attributes", // if you dont provide it will save class name for table name 
        timestamps: true,//creadted at & updaed at
        paranoid: true,//add time of delete in deletedAt
        sequelize: connection

    });

attributes.beforeCreate(async (attributes) => {
    attributes.attributeId = uuid();
})

module.exports = attributes;
