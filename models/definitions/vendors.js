// const { DataTypes,Model }=require("sequelize");
// const connection =require("../../dbConnection")
// const {v4:uuid}=require("uuid")

// class vendors extends Model{}
//     vendors.init({ 
//         vendorId:{
//         primaryKey : true,
//         type : DataTypes.STRING(60), //default length of String is 255 and we can define in ()
//     },
// },
// {
//     name : "vendors", // if you dont provide it will save class name for table name 
//     timestamps : true,//creadted at & updaed at
//     paranoid : true ,//add time of delete in deletedAt
//     sequelize : connection

// });

// vendors.beforeCreate(async (vendor)=>{
//     vendor.vendorId=uuid();
// })

// module.exports =vendors;



  

const { DataTypes,Model }=require("sequelize");
const connection =require("../../dbConnection")
const {v4:uuid}=require("uuid")

class vendors extends Model{}
//1.{} ==> database column name and thier attributes,constraints & types  &
//2.{} ==>
    vendors.init({ 
        vendorId:{
        primaryKey : true,
        type : DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
},
{
    name : "vendors", // if you dont provide it will save class name for table name 
    timestamps : true,//creadted at & updaed at
    paranoid : true ,//add time of delete in deletedAt
    sequelize : connection

});

vendors.beforeCreate(async (vendor)=>{
    vendor.vendorId=uuid();
})

module.exports =vendors;
