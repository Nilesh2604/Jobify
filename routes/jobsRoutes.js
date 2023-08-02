import express  from "express";
const router=express.Router();



import { 
    createJob,
    getAllJobs,
    updateJob,
    deleteJob,
    showstats
} from "../controllers/jobController.js";


router.route('/').post(createJob).get(getAllJobs)
router.route('/stats').get(showstats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router