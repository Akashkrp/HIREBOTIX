import express from 'express';
import { Job } from '../Models/job.js';

const router = express.Router();

router.post('/jobs', async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).send(job);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;