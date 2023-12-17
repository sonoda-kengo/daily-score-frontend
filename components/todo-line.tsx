'use client';

import { ITodo } from '@/app/types/todo';
import { Checkbox, Grid, Typography } from '@mui/material';

export const TodoLine = ({ todo }: { todo: ITodo }) => {
  return (
    <Grid container alignItems='center'>
      <Grid item xs={1}>
        <Checkbox
          onChange={(e) => {
            todo.isChecked = !todo.isChecked;
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>{todo.title}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>{todo.category}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{todo.date}</Typography>
      </Grid>
    </Grid>
  );
};
