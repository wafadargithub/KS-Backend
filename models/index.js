// // const sequelize = require("../dbConnection");
// const connection = require("../dbConnection");
// const users =require("./definitions/users");
// const vendors=require("./definitions/vendors");
// const product=require("./definitions/products");
// const productsVariation=require("./definitions/productVariations");
// const attributes=require("./definitions/attributes");
// const varitionHasAttribute=require("./definitions/variationHasAttribute")
// const {v4:uuid}=require("uuid");
// const products = require("./definitions/products");
// const productsVariations = require("./definitions/productVariations");
// const models= {users,vendors,product,productsVariation};

// // //vendor product 1:M
// // vendors.hasMany(product,{foreignKey:"vendorId"});
// // products.belongsTo(vendors,{foreignKey:"vendorId"});

// // //product productVariations 1:M
// // product.hasMany(productsVariation,{foreignKey:"productId"});
// // productsVariation.belongsTo(product,{foreignKey:"productId"})


// // //variation attribute M:M
// // productsVariations.hasMany(varitionHasAttribute,{foreignKey:"productVariationId",
// // });
// // varitionHasAttribute.belongsTo(productsVariation,{foreignKey:"productVariationId",
// // });

// // attributes.hasMany(varitionHasAttribute,{
// //     foreignKey:"attributesId",
// //      as:"attribute",
// // });
// // varitionHasAttribute.belongsTo(attributes,{
// //     foreignKey:"attributeId", 
// //     as:"variationHasAttributes"
// // })


// // vendor has many products
// // vendors.hasMany(product, { foreignKey: "vendorId" });
// // product.belongsTo(vendors, { foreignKey: "vendorId" });

// // product has many productVariations
// products.hasMany(productsVariation, { foreignKey: "productId", as: "productVariation" });
// productsVariations.belongsTo(product, { foreignKey: "productId", as: "product" });

// // productVariation has many variationHasAttribute
// productsVariation.hasMany(varitionHasAttribute, { foreignKey: "productVariationId" });
// varitionHasAttribute.belongsTo(productsVariation, { foreignKey: "productVariationId" });

// // attribute has many variationHasAttribute
// attributes.hasMany(varitionHasAttribute, { foreignKey: "attributesId", as: "attributeVariations" });
// varitionHasAttribute.belongsTo(attributes, { foreignKey: "attributeId", as: "attribute" });

// // vendors.belongsToMany(through,{foreignKey:"vendorHasProducts"});
// // product.belongsToMany(through,{foreignKey:"vendoHasProducts"})

// //relations

// const db = {};

// db.connection = connection; // created a key sequlize and provided it sequelize as a value
// connection.models = models;// created a key models in sequelize and passed models as a value

// module.exports = {db,models};



const connection=require("../dbConnection");
const users=require("./definitions/users");
const vendors=require("./definitions/vendors");
const products=require("./definitions/products");
const productsVariation=require("./definitions/productVariations");
const attributes=require("./definitions/attributes");
const variationHasAttribute=require("./definitions/variationHasAttribute")

const models={users,vendors,products,productsVariation, attributes, variationHasAttribute};

// Relations

// vendor products 1:M
vendors.hasMany(products,{foreignKey:"vendorId" ,as:"product" });
products.belongsTo(vendors,{foreignKey:"vendorId" ,as:"vendors"});

//product productVariations 1:Ms
// products.hasMany(productsVariation,{foreignKey:"productId",as:"productVariation"});
// productsVariation.belongsTo(products,{foreignKey:"productId",as:"products"});

products.hasMany(productsVariation ,{foreignKey:"productId",as:"productVariaton"})
productsVariation.belongsTo(products,{foreignKey:"productId",as:"products"})
//variations attributes M:M through varionHasAttribute
productsVariation.hasMany(variationHasAttribute,{foreignKey:"productsVariationId", as : "variationHasAttribute"});
variationHasAttribute.belongsTo(productsVariation,{foreignKey:"productsVariationId", as : "productsVariation"})

attributes.hasMany(variationHasAttribute,{foreignKey:"attributeId",as:"variationHasAttribute"});
variationHasAttribute.belongsTo(attributes,{foreignKey:"attributeId",as:"attributes"})



const db={};

db.connection=connection;
connection.models=models;
module.exports ={db,models};