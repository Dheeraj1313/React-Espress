export type AddTodo = (newTodo: string) => void;
export type SetData = (data: any) => void;
export type DeleteTodo = (deleteTodo: number) => void;
export interface AddTodoFormProps {
  addTodo: AddTodo;
}
export interface Todo {
    id: number | null,
    data: string
}
