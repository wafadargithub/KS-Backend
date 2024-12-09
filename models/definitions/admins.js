const { DataTypes,Model, uuid }=require("sequelize");
const connection =require("../../dbConnection")
const {v4:uuid}=require("uuid")

class admin extends Model{}
//1.{} ==> database column name and thier attributes,constraints & types  &
//2.{} ==>
admin.init({ 
    adminId:{
        primaryKey : true,
        type : DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
},
{
    name : "admin", // if you dont provide it will save class name for table name 
    timestamps : true,//creadted at & updaed at
    paranoid : true ,//add time of delete in deletedAt
    sequelize : connection

});

admin.beforeCreate(async (admin)=>{
   admin.adminId=uuid();
})

module.exports =admin;
