const tasks=require("../models/tasks")
const {databaseConnection,databaseDisConnection}=require("../Configrutions/databaseConfig")
exports.creatNewTask= (async (req,res)=>{
    await databaseConnection();
    let task=await tasks.create({taskDescription:req.body.task});
    await databaseDisConnection();
    res.status(200).json({message:'task created successfully',task:task});

})
exports.updateTask=(async(req,res)=>{
    const taskId=req.params.taskId;
    await databaseConnection();
    const task=await tasks.findById({_id:taskId});
    if(!task)
    {
        //await databaseDisConnection();
        res.status(404).json({error:"task not found"})
    }
   let newtask=await task.updateOne({taskDescription:req.body.task,completed:req.body.completed},{new:true})
    databaseDisConnection();
    
    res.status(200).json({message:"task updated successfully",newTask:newtask});
})