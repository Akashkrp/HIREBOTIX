import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import { postJob, getAllJobs, getASingleJob, getMyJobs, deleteJob } from "../controllers/jobController.js";

const router = express.Router();

router.post("/post", isAuthenticated, isAuthorized("employer"), postJob);
router.get("/getall", getAllJobs);
router.get("/getmyjobs", isAuthenticated, isAuthorized("employer"), getMyJobs);
router.delete("/delete/:id", isAuthenticated, isAuthorized("employer"), deleteJob);
router.get("/get/:id", getASingleJob)






export default router; 