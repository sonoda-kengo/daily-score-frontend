import { Box, Typography } from '@mui/material';
import { TodoLine } from './todo-line';
import { ITodo } from '@/app/types/todo';

export const TodoList = ({ todoList }: { todoList: ITodo[] }) => {
  return (
    <Box bgcolor='#D9D9D9' boxShadow={3} padding={3} borderRadius={1}>
      <Typography mb={2}>Todo List</Typography>
      {todoList && todoList.map((item, key) => <TodoLine todo={item} key={key} />)}
    </Box>
  );
};
