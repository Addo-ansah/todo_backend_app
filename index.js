//import the express package
import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

// create an instance of express
const app = express();
app.use(express.json());

//use this to port for our server
const PORT = 5000;
// create a route to handle GET request on the index route 
app.get("/", (req, res) => {
    res.send("Hello World");
});

mongoose.connect(process.env.MONGO_DB_CONSTRING, (error) => {
    if (error) {
        return console.log("Failed to connect to MongoDB");
    }

    else {
        console.log(`MongoDB is connected to the ${PORT}`);

        //you need to listen to the server if it is working
        // on the specified PORT
        app.listen(PORT, () => console.log(`Server is up and runing  PORT: ${PORT}`));
    }
});

