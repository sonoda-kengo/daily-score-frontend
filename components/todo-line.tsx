import { Grid, Typography } from '@mui/material';

export const TodoLine = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography>title</Typography>
      </Grid>
      <Grid item>
        <Typography>category</Typography>
      </Grid>
      <Grid item>
        <Typography>date</Typography>
      </Grid>
    </Grid>
  );
};
