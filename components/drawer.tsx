'use client';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import * as React from 'react';

interface IDrawer {
  text: string;
  link: string;
}

interface ICategory {
  text: string;
  id: number;
}

const drawerList: IDrawer[] = [
  { text: "today's schedule", link: 'schedule' },
  { text: 'To Do', link: 'todo' },
];

const categoryDrawerList: ICategory[] = [
  { text: 'category1', id: 1 },
  { text: 'category2', id: 2 },
];

export default function DrawerLeft() {
  return (
    <Box height='100vh' bgcolor='#698EB8'>
      <Box padding={2}>
        <Typography fontWeight='bold' align='center'>
          Dairy Score
        </Typography>
      </Box>
      <Divider />
      <List>
        {drawerList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={`/${item.link}`}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {categoryDrawerList.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton href={`/category/${item.id}`}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 1 }}>
        <Link href='login'>Sign In</Link>
      </Box>
    </Box>
  );
}
