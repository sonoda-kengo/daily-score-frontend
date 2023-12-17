import { Grid, Typography } from '@mui/material';

export const TodoLine = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>title</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>category</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>date</Typography>
      </Grid>
    </Grid>
  );
};
