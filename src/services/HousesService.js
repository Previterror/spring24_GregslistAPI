import { dbContext } from "../db/DbContext.js"

class HousesService {
    async getHouses() {
        const houses = await dbContext.
    }

}

export const housesService = new HousesService()