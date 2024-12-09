const routes  = require("express").Router();
const {
  createUser,
  getAllUser,
  updateUser
}=require("../controlers/userControler");

const {createValidator}=require("../validations/userValidator")
  
routes.get("/get-all-users", getAllUser);
routes.post("/create-user",createValidator,createUser);
routes.patch("/update",updateUser);

module.exports=routes;







 