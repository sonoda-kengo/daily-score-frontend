import { ITodo } from '@/app/types/todo';
import { TodoLine } from '@/components/todo-line';

export default async function CategoryIdPage() {
  const todotest: ITodo = { isChecked: false, title: 'test', category: 'category', date: 'Dec. 1' };
  return (
    <>
      <TodoLine todo={todotest} />
    </>
  );
}
