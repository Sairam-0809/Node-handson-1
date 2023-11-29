const express=require('express');
const route=express.Router();

const bcrypt=require('bcrypt');
const arr=[];
const salt=10;
route.post('/register',(req,res)=>{
const data=req.body;
const random=bcrypt.genSalt(salt);
console.log(random);
data.password=bcrypt.hashSync(data.password,salt);

arr.push(data);
console.log(arr);
return res.send('user registered successfully');

});

route.post('/login',(req,res)=>{
    const loginData=req.body;
    const findArray=arr.find(item=>item.email==loginData.email);

    if(!findArray){
        return res.send({msg:"user is not registered"})
    }
    const validate=bcrypt.compare(loginData.password,findArray.password);
    if(validate){
        return res.send({msg:"user loginned successfully"});
    }
    return res.send({msg:"user password doesn't match"});

})


module.exports=route;