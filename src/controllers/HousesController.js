import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .get('/search', this.searchHouses)
            .get('/:houseId', this.getHouseById)
    }


    async searchHouses(request, response, next) {
        try {
            const searchQ = request.query
            const houses = await housesService.searchHouses(searchQ)
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }


    async getHouses(request, response, next) {
        try {
            const houses = await housesService.getHouses()
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }


    async getHouseById(request, response, next) {
        try {
            const houseId = request.params.houseId
            const house = await housesService.getHousebyId(houseId)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }

}