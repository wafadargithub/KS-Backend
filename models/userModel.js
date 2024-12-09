// const { response } = require("express");
// const { models } = require("./index");
// const { } = require("../controlers/userControler");


// module.exports = {
//     createUser: async (body) => {
//         try {
//             const user = await models.users.createUser({ ...body });
//             console.log(user)

//             return {
//                 response: user,
//             }

//         } catch (error) {
//             return {
//                 error: error.errors[0].message,
//             }
//         }
//     },
//     getAllUser: async (body) => {
//         try {
//             const user = await models.users.findAll();
//             return {
//                 response: user,
//             }
//         } catch (error) {
//             return {
//                 error: error.errors[0].message,
//             }
//         }
//     },
//     updateUser: async (username, ...body) => {
//         try {
//             const user = await models.users.update(
//                 {
//                     ...body,
//                 },
//                 {
//                     where: {
//                         username: username,
//                     }
//                 }
//             );
//             return {
//                 response: user,
//             }
//         } catch (error) {
//             return {
//                 error: error.errors[0].message,
//             }
//         }
//     },
// }
