// const { DataTypes,Model }=require("sequelize");
// const connection =require("../../dbConnection")
// const {v4:uuid}=require("uuid")

// const productsVariations=require("./productVariation")
// const attribute=require("./attributes");
// const attributes = require("./attributes");



// class varitionHasAttribute extends Model{}
// //1.{} ==> database column name and thier attributes,constraints & types  &
// //2.{} ==>
//     varitionHasAttribute.init({ 
//         attributeId:{
//         primaryKey : true,
//         type : DataTypes.STRING(60), //default length of String is 255 and we can define in ()
//     },
//     productsVariationId:{
//         type:DataTypes.STRING(),
//         references:{
//             model:productsVariations,
//             key:"productsVariationId"
//         }
//     },
//     attributeId:{
//         type:DataTypes.STRING(),
//         references:{
//             model:attributes,
//             key:"attributeId"
//         }
//     }
// },
// {
//     name : "varitionHasAttribute", // if you dont provide it will save class name for table name 
//     timestamps : true,//creadted at & updaed at
//     paranoid : true ,//add time of delete in deletedAt
//     sequelize : connection

// });

// varitionHasAttribute.beforeCreate(async (attribute)=>{
//     varitionHasAttribute.varitionHasAttributeId=uuid();
// })

// module.exports =varitionHasAttribute;



const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection")
const { v4: uuid } = require("uuid")
const products=require("./products")
const productVariations=require("./productVariations");
 const attributes=require("./attributes")

class varitionHasAttribute extends Model { }
//1.{} ==> database column name and thier attributes,constraints & types  &
//2.{} ==>
    varitionHasAttribute.init({
        varitionHasAttributeId: {
        primaryKey: true,
        type: DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
    productsVariationId:{
        type:DataTypes.STRING(),
        references:{
            model:productVariations,
            key:"productsVariationId"
        }
    },
    attributeId:{
        type:DataTypes.STRING(),
        references:{
            model:attributes,
            key:"attributeId"
        }
    }
},
    {
        name: "varitionHasAttribute", // if you dont provide it will save class name for table name 
        timestamps: true,//creadted at & updaed at
        paranoid: true,//add time of delete in deletedAt
        sequelize: connection

    });

    varitionHasAttribute.beforeCreate(async (varitionHasAttribute) => {
        varitionHasAttribute.varitionHasAttributeId = uuid();
})

module.exports = varitionHasAttribute;
