module.exports={
    login:(req,res)=>{
        // try{
        //     const {username,password}=req.body;
        //     const response=await getUser({email:"false",username:username});
        //     if(response.error || !response.response)
        //         return responseHandler(
        //        res,
        //        response.error ?  response:{error: "no user exists"}
        //         );
        //     
        // }
        // console.log("pass", response.response)
         return res.send("login request");
    },
    logout:(req,res)=>{
        return res.send("logout request")
    },
};