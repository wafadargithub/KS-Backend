// // const {hash}=require("bcrypt");
// const { response } = require("express");

// const errorHandler=require("../errorHandler");
// const {hash}=require("bcrypt");
// const {v4: uuid}=require("uuid");
// const {createUser}=require("../models/userModel")

// module.exports={
//     createUser:async(req,res)=>{
//         try{
//              req.body.userId=uuid();
//             req.body.password=await hash(req.body.password,10)
//             const response=await createUser(req.body);

//             if(response.error){
//                 return responseHandler(res,response.error)
//             }
//             return responseHandler(res,response.response)
//         }catch(error){
//                  return errorHandler(res,err)
//         }
//         return res.send({
//         status:"ok",
//         code:200, 
//         response:req.body,
//        });
//     }
//         }catch(error){
//             return res.send({
//                 status:"error",
//                 code:"400",
//                 error:"request not found"
//             });
//         }
//         console.log(req); 
//         return res.send("create user request")
//     },

//     getAllUser:(req,res)=>{
//         return res.send("get all users")
//     },
//     updateUser:(req,res)=>{
//         return res.send("update user");
//     },
// };

// const {hash}=require("bcrypt")
// module.exports={


//     getAllUsers:(req,res)=>{

//         console.log(req.query);

//         return res.send("get user");
//     },

//     createUser:async(req,res)=>{
//         try {
//         req.body.password= await hash(req.body.password,10);


//         return res.send({
//             status:"ok",
//             code:200,
//             response: req.body,
//         });

//         } catch (error) {
//             return res.send({
//                 status:"error",
//                 code:400,
//                 error:error.message,
//             });

//         };

//     },
//     updateUser:(req,res)=>{
//         return res.send("update user");
//     },

// };





// const responseHandler=require("../responceHandler");
// const errorHandler=require("../errorHandler");
// const {hash}=require("bcryptjs");
// const {v4:uuid}=require("uuid");
// const {createUser}=require("../models/userModel")
// const { response } = require("express");

// module.exports={
//     create:async (req,res)=>{
//         try{
//             req.body.userId=uuid();
//             req.body.password=await hash(req.body.password,10);

//             if(response.error){
//                 return errorHandler(res,response.error)
//             }
//             return responseHandler(res,response.response);
//         }catch(error){
//             return errorHandler(res,error);
//         }
//     },
//     get:(req,res)=>{
//         try{
//             return responseHandler(res,req.query);
//         }catch(error){
//             return errorHandler(res,error)
//         }
//     },
//     getAllUsers:(req,res)=>{

//                console.log(req.query);

//                return res.send("get user");
//           },
//     updateUser:(req,res)=>{
//             return res.send("update user");
//           },

// }



// const {hash}   = require("bcrypt") ;
// const responseHandler = require("../responseHandlr")
// const Error  = require("../errorHandler")

// module.exports = {
//    create :async(req ,res)=>{
//        try{
// req.body.Password = await hash(req.body.Password , 10)
//    return responseHandler(res , req.body);
//        }catch(error){
//   return  Error(res, error);
//        }
//    } ,
//    get :(req ,res)=>{
//    try{
//       return responseHandler(res , req.query);
//    } catch(error){
//       return  Error(res, error);
//    }
//    } ,
//    update :(req ,res)=>{
//      try{
//       return responseHandler(res , req.body);
//      }catch(error){
//       return  Error(res, error);
//      }
//    } ,
//    Deleteuser :(req,res)=>{
//       try{
//          return responseHandler(res , req.query);
//       }catch(error){
//          return  Error(res, error);
// }
// }
// }


const { response } = require("express");
const { createUser, getAllUser, updateUser } = require("../models/userModel")
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid")
const errorHandler = require("../errorHandler");
const responceHandler = require("../responceHandler");
const { create } = require("../models/definitions/users");


module.exports = {
   createUser: async (req, res) => {
      try {

         req.body.userId = uuid();
         req.body.password = await hash(req.body.password, 10)

         const response = await createUser(req.body);

         if (response.error) {
            return errorHandler(res, response.error);
         }
         return responceHandler(res, response.response);
      } catch (error) {
         return errorHandler(res, error);
      }
   },
   getAllUser: async (req, res) => {
      try {
         const response = await getAllUser();
         if (response.error) {
            return errorHandler(res, response.error);
         }
         return responceHandler(res, response.response);
      } catch (error) {
         console.log(error)
         return res.send({
            code: 400,
            status: "not found path",
            response: error,
            error: error
         })
      }
   },
   updateUser: async (req, res) => {
      try {
         const response = await updateUser(req.body)
         if (response.error) {
            return errorHandler(res, response.error);
         }

         return responceHandler(res, response.response)
      } catch (error) {
         return errorHandler(res, error);
      }
   },
   Deleteuser :(req,res)=>{
      try{
         return responseHandler(res , req.query);
      }catch(error){
         return  Error(res, error);

      }
    }
}


 

 
