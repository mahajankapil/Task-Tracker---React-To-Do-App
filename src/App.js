import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskTracker() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Task Tracker
        </Typography>
        <TextField
          fullWidth
          label="New Task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleAddTask();
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          style={{ marginTop: '1rem', width: '100%' }}
        >
          Add Task
        </Button>
        <List style={{ marginTop: '1rem' }}>
          {tasks.map((t, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleDeleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={t} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}