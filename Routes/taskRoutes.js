/*
1--> get all tasks
2--> get speciic task
3--> post new tasks
4--> edit specific task
5--> delete specific task
*/
//console.log('hello from task routes');
const express= require("express");
const {creatNewTask,updateTask}=require("../Services/taskServices")
const router=express.Router();
router.get('/getAllTasks',(req,res)=>
{
    console.log("hello from get task");
    res.json("hello from tasks")
})
router.post('/creatTask',creatNewTask)
router.put('/updateTask/:taskId',updateTask)
module.exports=router;