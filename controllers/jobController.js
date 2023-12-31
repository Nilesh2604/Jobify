import Job from '../models/Job.js';
import {StatusCodes} from 'http-status-codes'
import { BadRequestError,NotFoundError } from "../errors/index.js"
import checkPermissions from '../utils/checkPermissions.js';

const createJob=async (req,res)=>{
    const {position, company} = req.body;

  if (!position || !company) {
    throw new BadRequestError('Please provide all values');
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.OK).json({ job });
}

const getAllJobs=async (req,res)=>{
    const jobs =await Job.find({
        createdBy:req.user.userId
    })
    res.status(StatusCodes.OK).json({jobs,totalJobs:jobs.length,numOfPages:1})
}

const updateJob=async (req,res)=>{
   const {company,position}=req.body;
   const {id:jobId}=req.params;

   if (!position || !company) {
    throw new BadRequestError('Please provide all values');
  }
  const job =await Job.findOne({_id:jobId})
  if(!job){
    throw new NotFoundError(`No job with id : ${jobId}`);
  }

   checkPermissions(req.user,job.createdBy)

  const updateJob=await Job.findOneAndUpdate({_id:jobId},req.body,{
  
    new:true,
    runValidators:true,
  })

  res.status(StatusCodes.OK).json({updateJob});


}

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id :${jobId}`);
  }

  checkPermissions(req.user, job.createdBy);

  await job.deleteOne();

  res.status(StatusCodes.OK).json({ msg: 'Success! Job removed' });
};
const showstats=async (req,res)=>{
    res.send('Show stats')
}

export {createJob,getAllJobs,updateJob,deleteJob,showstats}