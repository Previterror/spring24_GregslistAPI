import { dbContext } from "../db/DbContext.js"

class JobsService {
    async searchJobs(searchQ) {
        const jobs = await dbContext.Jobs.find(searchQ)
        return jobs
    }

    async getJobbyId(jobId) {
        const job = await dbContext.Jobs.findById(jobId)
        if (!job) throw new Error(`No job found with id: ${jobId}`)
        return job
    }


    async getJobs() {
        const jobs = await dbContext.Jobs.find()
        return jobs
    }


}

export const jobsService = new JobsService()