'use client';

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ITodoFormData } from '@/app/types/todo';

export const TodoForm = () => {
  const menuItems = [{ value: 'work' }, { value: 'personal' }];

  const { handleSubmit, control } = useForm<ITodoFormData>();

  const onSubmit: SubmitHandler<ITodoFormData> = (data) => {
    console.log('Submitted Todo:', data.todo);
    console.log('Selected Category:', data.category);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container alignItems='center' spacing={1}>
        <Grid item xs={6}>
          <Controller
            name='todo'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                label='Todo'
                variant='outlined'
                margin='normal'
                fullWidth
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl variant='outlined' margin='normal' required fullWidth>
            <InputLabel id='category-label'>Category</InputLabel>
            <Controller
              name='category'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <Select {...field} label='Category' labelId='category-label'>
                  {menuItems.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.value}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <Button type='submit' variant='contained' color='primary' size='large'>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
