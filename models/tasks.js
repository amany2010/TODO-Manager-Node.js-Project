const mongoose=require('mongoose')
const taskSchema = new mongoose.Schema({
    taskDescription:{
        type:String
    },
    completed:{
        type:Boolean
    },
    removed:{
        type:Boolean
    },
    repeatation:{
        type:Date,
    }
},
  { timestamps: true }
  );
  const Task = mongoose.model("Task", taskSchema);
  module.exports = Task;
  