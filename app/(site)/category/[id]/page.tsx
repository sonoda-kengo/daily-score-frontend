import { ITodo } from '@/app/types/todo';
import { TodoAdd } from '@/components/todo-add';
import { TodoList } from '@/components/todo-list';
import { Box } from '@mui/material';

export default async function CategoryIdPage() {
  const todotest: ITodo = { isChecked: false, title: 'test', category: 'category', date: 'Dec. 1' };
  const todoList: ITodo[] = [todotest, todotest];
  return (
    <>
      <Box>
        <TodoList todoList={todoList} />
      </Box>
      <Box mt={2}>
        <TodoAdd />
      </Box>
    </>
  );
}
