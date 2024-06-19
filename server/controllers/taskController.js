const taskModel = require('../models/taskModel');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};

const addTask = async (req, res) => {
    const { task_name } = req.body;
    try {
        const newTask = await taskModel.addTask(task_name);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add task' });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    try {
        const updatedTask = await taskModel.updateTask(id, completed);
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await taskModel.deleteTask(id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
};

module.exports = {
    getAllTasks,
    addTask,
    updateTask,
    deleteTask,
};
