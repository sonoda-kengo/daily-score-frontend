import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { SigninButton } from './button';

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Dairy-Score-App
        </Typography>
        <SigninButton />
      </Toolbar>
    </AppBar>
  );
}
