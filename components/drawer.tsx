'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

const drawerWidth = 240;

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
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
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
      </Drawer>
    </Box>
  );
}
