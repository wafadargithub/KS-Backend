const { DataTypes,Model, uuid }=require("sequelize");
const connection =require("../../dbConnection")
const {v4:uuid}=require("uuid")

class customers extends Model{}
//1.{} ==> database column name and thier attributes,constraints & types  &
//2.{} ==>
    customers.init({ 
        customerId:{
        primaryKey : true,
        type : DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
},
{
    name : "customers", // if you dont provide it will save class name for table name 
    timestamps : true,//creadted at & updaed at
    paranoid : true ,//add time of delete in deletedAt
    sequelize : connection

});

customers.beforeCreate(async (customer)=>{
    customer.customerId=uuid();
})

module.exports = customers;
