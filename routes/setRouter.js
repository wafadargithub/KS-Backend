const routes=require("express").Router();
const {setTimeout,updateTime}=require("../controlers/setControler");

routes.get("/usersets",setTimeout);
routes.get("/userset",updateTime);

module.exports=routes;