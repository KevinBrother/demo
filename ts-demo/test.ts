interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }
  
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  }

  type ObjExclude<T, K extends keyof T> = {
      [P in K]: never
  }
  

  type TodoPreview = ObjExclude<Todo, "title">;
  
  const todo1: TodoPreview = {
    title: null
  };

type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number
  