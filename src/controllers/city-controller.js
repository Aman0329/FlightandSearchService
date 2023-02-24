//controllers are used to create api's and intearct with model , controller will interact with service layer first and service layer will interact with respository layer and then with model
const {cityService}=require('../services/index');
const citiService=new cityService();
 const create= async (req,res)=>{ //post type request 
    try {
        const city= await citiService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"city created succesfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"city not created due to error",
            success:false,
            err:error
        });
    }

 }
 const destroy=async(req,res)=>{ //delete type request city/:id
    try{
        const response=citiService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"city deleted succesfully",
            err:{},
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            message:"city not deleted due to error",
            success:false,
            err:error,
        });
    }
}
 const get= async(req,res)=>{ //get type request
    try {
        const city=citiService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            message:"city found succesfully",
            success:true,
            err:{},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:[],
            message:"city not found",
            success:false,
            err:error,
        })
    }
    
 }
 const update=async (req,res)=>{ //patch type request
    try {
        const response=citiService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            message:"city updated succesfully",
            success:true,
            err:{},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:[],
            message:"city not updated",
            success:false,
            err:error,
        })
    }
    
 }
 module.exports={
    create,
    destroy,
    get,
    update
 }  