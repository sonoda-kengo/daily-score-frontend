export interface ITodo {
  isChecked: boolean;
  title: string;
  category: string;
  date: string;
}

export interface ITodoFetchData {
  title: string;
  category: string;
  date: string;
}

export interface ITodoFormData {
  todo: string;
  category: string;
}
