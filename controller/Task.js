const Task = require('../model/Task');


const createTask = async(req, res)=>{
 const task = await Task.create(req.body);
 res.status(200).json({task});
}

const findAllTasks = async(req, res)=>{
    const alltasks = await Task.find({});
    res.status(200).json({tasks:alltasks});
}


module.exports = {
    createTask,
    findAllTasks
}