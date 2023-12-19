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
      <Grid container xs={11} borderBottom={1} alignItems='center'>
        <Grid item xs={6}>
          <Typography ml={1}>{todo.title}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>{todo.category}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{todo.date}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
