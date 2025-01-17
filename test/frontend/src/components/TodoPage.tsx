/**
 * @todo YOU HAVE TO IMPLEMENT THE DELETE AND SAVE TASK ENDPOINT, A TASK CANNOT BE UPDATED IF THE TASK NAME DID NOT CHANGE, YOU'VE TO CONTROL THE BUTTON STATE ACCORDINGLY
 */
import { Check, Delete } from '@mui/icons-material';
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.ts';
import { Task } from '../index';

const TodoPage = () => {
  const api = useFetch();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    // Fetch tasks on mount
    api.get('/tasks').then((data) => setTasks(data));
  }, [api]);

  const handleSaveTask = async () => {
    if (!newTaskName.trim()) return;

    if (editingTask) {
      // Edit existing task
      const updatedTask = await api.patch(`/tasks/${editingTask.id}`, {
        name: newTaskName,
      });
      setTasks((prev) =>
        prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      );
    } else {
      // Create new task
      const createdTask = await api.post('/tasks', { name: newTaskName });
      setTasks((prev) => [...prev, createdTask]);
    }

    setNewTaskName('');
    setEditingTask(null);
  };

  const handleDeleteTask = async (id: number) => {
    await api.delete(`/tasks/${id}`);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const startEditing = (task: Task) => {
    setNewTaskName(task.name);
    setEditingTask(task);
  };

  const isButtonDisabled =
    !newTaskName.trim() ||
    (editingTask ? newTaskName === editingTask.name : false);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>
      <Box display="flex" gap={2} mb={2}>
        <TextField
          fullWidth
          label="Task Name"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleSaveTask}
          disabled={isButtonDisabled}
        >
          {editingTask ? 'Update' : 'Add'} Task
        </Button>
      </Box>
      {tasks.map((task) => (
        <Box key={task.id} display="flex" alignItems="center" mb={1}>
          <Typography flex={1}>{task.name}</Typography>
          <IconButton onClick={() => startEditing(task)}>
            <Check />
          </IconButton>
          <IconButton onClick={() => handleDeleteTask(task.id)}>
            <Delete />
          </IconButton>
        </Box>
      ))}
    </Container>
  );
};

export default TodoPage;
