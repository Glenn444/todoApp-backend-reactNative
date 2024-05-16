const { createTask, findAllTasks } = require("../controller/Task");

const express = require('express');
const router = express.Router();

 router.route('/create').post(createTask);
 router.route('/tasks').get(findAllTasks);


 module.exports = router;