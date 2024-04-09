import { dbContext } from "../db/DbContext.js"

class HousesService {
    async searchHouses(searchQ) {
        const houses = await dbContext.Houses.find(searchQ)
        return houses
    }

    async getHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }

    async getHousebyId(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house) throw new Error(`No house found with id: ${houseId}`)
        return house
    }
}

export const housesService = new HousesService()