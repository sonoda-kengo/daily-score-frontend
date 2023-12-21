import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

export const TodoAdd = () => {
  return (
    <Grid container spacing={1} alignItems='center'>
      <Grid item xs={6}>
        <FormControl defaultValue='' required fullWidth>
          <TextField placeholder='todo' />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select label='category'>
            <MenuItem value={1}>Category 1</MenuItem>
            <MenuItem value={2}>Category 2</MenuItem>
            <MenuItem value={3}>Category 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};
