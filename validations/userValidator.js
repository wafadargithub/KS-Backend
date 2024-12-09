
// const joi=require("joi");
// const createUserValidator=joi.object({
//     name:joi.string().min(3).max(32).required(),
//     username:joi.string().alphanum().required(),
//     password:joi.string().min(8).max(18).required(),
// })

// module.exports={
//     createUserValidator:async (req,res,next)=>{
//         try{
//             await createUserValidator.validateAsync(req.body)
//              next();
//         }catch (error){
//             return res.send({
//                 error:error.message,
//             });
//         }
//     }
// }


// const joi = require("joi");
// const createUserValidator = joi.object({
//     name: joi.string().min(3).max(34).required(),
//     username: joi.string().alphanum().required(),
//     password: joi.string().min(8).max(18).required()
// });

// module.exports = {
//     createValidator : async (req, res, next)=>{
//         try {
//             await createUserValidator.validateAsync(req.body);
//             next();
//         } catch (error) {
//             return res.send({
//                 error: error.message,
//             });
//         }
//     },
// };


// const joi=require("joi");
// const createUserValidator=joi.object({
//     firstname:joi.string().min(3).max(34).required(),
//     lastname:joi.string().alphanum().required(),
//     password:joi.string().min(8).max(18).required(),
// })

// module.exports={
//     createValidator: async(req,res,next)=>{
//         try{
//              await createUserValidator.validateAsync(req.body)
//              next();
//         }catch (error){
//             return res.send({
//                 error:error.message,
//             })
//         }
//     },
// };


// const joi = require("joi");
// const createUserValidator = joi.object({
//     name: joi.string().min(3).max(34).required(),
//     username: joi.string().alphanum().required(),
//     password: joi.string().min(8).max(18).required()
// });

// module.exports = {
//     createValidator : async (req, res, next)=>{
//         try {
//             await createUserValidator.validateAsync(req.body);
//             next();
//         } catch (error) {
//             return res.send({
//                 error: error.message,
//             });
//         }
//     },
// };




// const joi=require("joi");

// const createUserValidator=joi.object({
//     name: joi.string().min(3).max(35).required(),
//     username: joi.string().alphanum().required(),
//     password: joi.string().min(8).max(18).required(),
// })
// module.exports={
//     createValidator: async (req,res,next)=>{
//         try{
//           await  createUserValidator.validateAsync(req.body);
//             next();
//         }catch(error){
//             return res.send({
//                 error:error.message,
//             });
//         }
//     },
// };




const joi = require("joi");
const createUserValidator= joi.object({
    name: joi.string().min(3).max(34).required(),
    username: joi.string().required(),
    password: joi.string().min(8).max(18).required(),
});
module.exports={
    createValidator : async(req,res,next)=>{

        try {
            await createUserValidator.validateAsync(req.body);

            next();
            
        } catch (error) {
            return res.send({
                error:error.message,
            });
            
        }
    },
};