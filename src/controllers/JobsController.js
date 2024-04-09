import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";

export class JobsController extends BaseController {
    constructor() {
        super('api/jobs')
        this.router
            .get('', this.getJobs)
            .get('/:jobId', this.getJobById)
            .get('/search', this.searchJobs)
    }
    async searchJobs(request, response, next) {
        try {
            const searchQ = request.query
            const jobs = await jobsService.searchJobs(searchQ)
            response.send(jobs)
        } catch (error) {
            next(error)
        }
    }


    getJobs(request, response, next) {
        try {
            const jobs = await jobsService.getJobs()
            response.send(jobs)
        } catch (error) {
            next(error)
        }
    }

    async getJobById(request, response, next) {
        try {
            const jobId = request.params.jobId
            const job = await jobsService.getJobbyId(jobId)
            response.send(job)
        } catch (error) {
            next(error)
        }
    }
}