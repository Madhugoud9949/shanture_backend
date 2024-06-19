const db = require('../config/database');

const getAllTasks = async () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM tasks', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const addTask = async (task_name) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO tasks (task_name, completed) VALUES (?, false)', [task_name], (err, result) => {
      if (err) {
        reject(err);
      } else {
        const newTask = {
          id: result.insertId,
          task_name: task_name,
          completed: false
        };
        resolve(newTask);
      }
    });
  });
};

const updateTask = async (id, completed) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE tasks SET completed = ? WHERE id = ?', [completed, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        if (result.changedRows === 0) {
          reject(new Error('Task not found'));
          return;
        }
        const updatedTask = {
          id: id,
          completed: completed
        };
        resolve(updatedTask);
      }
    });
  });
};

const deleteTask = async (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        if (result.affectedRows === 0) {
          reject(new Error('Task not found'));
          return;
        }
        resolve();
      }
    });
  });
};

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask
};
