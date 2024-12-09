const express=require("express");
const router=express.Router();

router.get("/",(res,req)=>{
   return res.send({data:"here is user data"})
})
router.post("/",(res,req)=>{
   return res.send({data:"user Created"})
})
router.put("/",(res,req)=>{
   return res.send({data:"user update"})
})
router.delete("/",(res,req)=>{
   return res.send({data:"user delete:("})
});
module.exports=router;