import mongoose from "mongoose";

import React from 'react'

export const connectMongodb =async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MONGO")
    } catch (error) {
        console.log("Error connecting mongo", error);
    }
}
