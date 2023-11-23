const route=require('express').Router();

route.get('/api',(req,res)=>{
    return res.send('<h1>This is Api</h1>');

})
route.get('/register/:id',(req,res)=>{
    const data=req.query;
    console.log(req.params.id);
    const name=data.name;
    const phone=data.phone;
    return res.send({"name":name,"phone":phone});
})
route.post('/login',(req,res)=>{
const data= req.body;
console.log(data,"loggin data");
return res.send(req.body);

})

module.exports=route;