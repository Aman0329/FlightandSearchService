const express=require('express');
const bodyparser=require('body-parser');
const { PORT } = require('./config/serverconfig');
const CityRepository=require('./respository/city-respository');

const setupandstartserver=async ()=>{
//create the express object
const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.listen(PORT,()=>{
    console.log(`server started succesfully on ${PORT}`);
    const obj=new CityRepository();
    obj.createCity({name:"new delhi"});
});
}
setupandstartserver(); 