export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function delTodo(text) {
  return {
    type: DEL_TODO,
    text
  };
}
