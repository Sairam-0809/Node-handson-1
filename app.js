const route=require('express').Router();


const middleware1=(req,res,next)=>
{
console.log("middleware 1");
next();
}
route.use(middleware1);

const md2=(req,res,next)=>{
    console.log("md2");
    next();
}
route.get('/api',md2,(req,res)=>{
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