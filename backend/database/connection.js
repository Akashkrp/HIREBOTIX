import mongoose from 'mongoose';

export const connection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_PORTAL_AUTOMATION"
    }).then(() => {
        console.log("Connected to Database");
    }).catch(err => {
        console.log(`Some error occurred while connecting to database: ${err}`);
    });
};