// const {datatypes, Model}=require("sequelize");
// const connection = require("../../dbConnection");

//  class users extends Model {}

//  users.init({
//     userId:{
//         primaryKey:true,
//         type:datatypes.STRING(60),
//     },
//     name:{
//         type:datatypes.STRING(34),
//         allowNull:false,
//     },
//     username:{
//         type:datatypes.STRING(40),
//         unique:null,
//         allowNull:false,
//     },
//     password:{
//         type:datatypes.STRING(1000),
//         allowNull:false,
//     },

//  },
//  {
//     name:"users",
//     timestamps:true,
//     paranoid:true,
//     sequelize:connection,
//  },
// );

// module.exports=users;




//Data base k tables ku use krna k liya Model
//Differnce b/w P.K and U.k(Unique) is that U.k can be null 
const { DataTypes,Model }=require("sequelize");
const connection =require("../../dbConnection")

class users extends Model{}
//1.{} ==> database column name and thier attributes,constraints & types  &
//2.{} ==>
users.init({ 
    userId:{
        primaryKey : true,
        type : DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
    username : {
        type : DataTypes.STRING(60),
        allowNull : false,
    },
    username : {
        type : DataTypes.STRING(34),
        unique : true,
        allowNull : false,
    },
    password : {
        type : DataTypes.STRING(1000),
        allowNull : false,
    },
},
{
    name : "users", // if you dont provide it will save class name for table name 
    timestamps : true,//creadted at & updaed at
    paranoid : true ,//add time of delete in deletedAt
    sequelize : connection

});
users.beforeCreate(async (vendor)=>{
    users.userIdId=uuid();
})

module.exports = users;
