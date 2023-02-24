// in respository layer we declare all the methods we want in order to perform action
const {City}=require('../models/index'); //require whole database which is index
 class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }
        catch(error){
            throw error;
        }
    } //function for creating city in city table

    async deleteCity(cityId){
        try{
            await City.destroy({
                where :{
                    id:cityId
                }
            });
            return true;
        }
        catch(error){
            throw error;
        }
    }
    async updateCity(cityId,data){
        try {
            const response=await City.update(data,{
                where:{
                    id:cityId
                }
            });
            return response;
        } catch (error) {
            throw(error);
        }
    }
    async getCity(cityId){
        try {
            const city=await City.findByPk(cityId);
            return city;
        } catch (error) {
            throw(error);
        }
    }
 } 
 module.exports=CityRepository;