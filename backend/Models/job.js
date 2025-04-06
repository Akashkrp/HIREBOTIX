import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    company: String,
    location: String,
    salary: Number
});

export const Job = mongoose.model('Job', jobSchema);