const {DataTypes}=require("express");



Product.init({
  
productId:{
    primaryKey:true,
    type:DataTypes.STRING(70),
},
pruductname:{
    type:DataTypes.STRING(80),
    allowNull:false,
    unique:true,
},
productprice:{
    type:DataTypes.DECIMAL(50,30),
    allowNull:false,
},
description:{
    type:DataTypes.TEXT,
    allowNull:true,
},
stock:{
    type:DataTypes.INTEGER,
    allowNull:false,
    default:0,
}
});

module.exports=product;