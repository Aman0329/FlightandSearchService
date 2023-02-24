// in service layer we call all the methods which we decare in repository layer 
const {CityRepository}=require('../respository/index');
class cityService{
    constructor(){
         this.cityrepository=new CityRepository(); // new way to write a class , can be written in the way respository layer is written that is without constructor
    }
    async createCity(data){
        try {
            const city=await this.cityrepository.createCity(data);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer")
            throw error;
        }

    }
    async deleteCity(cityId){
        try {
            const response=await this.cityrepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong at service layer")
            throw error;
        }

    }
    async updateCity(cityId,data){ 
        try { 
           const response= await this.cityrepository.updateCity(cityId,data);
           return response;
            
        } catch (error) {
            console.log("something went wrong at service layer")
            throw error;
        }
    }
    async getCity(cityId){
        try {
            const city=await this.cityrepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer")
            throw error;
        }

    }
}
module.exports=cityService;