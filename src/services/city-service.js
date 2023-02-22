// in service layer we call all the methods which we decare in repository layer 
const {CityRepository}=require('./respository/index');
class cityService{
    constructor(){
         this.cityrepository=new CityRepository();
    }
    async createCity(){
        try {
            const city=await this.cityrepository.createCity(data);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer")
            throw error;
        }

    }
    async deleteCity(){
        try {
            const response=await this.cityrepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong at service layer")
            throw error;
        }

    }
    async updateCity(id){ 
        try { 
           const city= await this.cityrepository.updateCity(cityId,data);
           return city;
            
        } catch (error) {
            console.log("something went wrong at service layer")
            throw error;
        }
    }
    async getCity(){
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