// next 2 lines to loads environment variables from a .env file into process.env
const dotenv = require("dotenv");
dotenv.config({ path: "configuration.env" });
const cors = require("cors");
const express=require("express")
const app=express();
//enable CORS for all routes
app.use(cors())
app.use(express.json());
const PORT=process.env.portNumber||8000;
const taskRoutes=require('./Routes/taskRoutes')
app.use('/api/v1/tasks',taskRoutes);


app.listen(PORT,()=>{
    console.log(`app listing on port ${PORT} `);
})
