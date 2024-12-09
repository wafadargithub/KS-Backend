module.exports={
    setTimeout:(req,res)=>{
        console.log(req.body);
        return res.send("setTimeOut current time")
    },
    updateTime:(req,res)=>{
        return res.send("getAll user time update")
    },
}; 