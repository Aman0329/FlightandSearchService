const express=require('express');
const bodyparser=require('body-parser');
const { PORT } = require('./config/serverconfig');
const apiRoutes=require('./routes/index');

const setupandstartserver=async ()=>{
//create the express object
const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/api',apiRoutes);
app.listen(PORT,()=>{
    console.log(`server started succesfully on ${PORT}`);
});
}
setupandstartserver(); 