import { Box } from '@mui/material';
import { ITodo } from '@/app/types/todo';
import { TodoAdd } from '@/components/todo-add';
import { TodoForm } from '@/components/todo-form';
import { TodoList } from '@/components/todo-list';

export default async function CategoryIdPage() {
  const todotest: ITodo = { isChecked: false, title: 'test', category: 'category', date: 'Dec. 1' };
  const todoList: ITodo[] = [todotest, todotest];
  return (
    <>
      <Box>
        <TodoList todoList={todoList} />
      </Box>
      <Box mt={2}>
        <TodoForm />
      </Box>
    </>
  );
}
