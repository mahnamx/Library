import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
  todoList: [],
  filter: "All",
  book: undefined,
  addBook: (title) =>
    set(
      produce((state) => {
        state.todoList.push({
          id: state.todoList.length + 1,
          title,
          complete: false
        });
      })
    ),
  updateBook: (id, newTitle) =>
    set(
      produce((state) => {
        if (id && newTitle) {
          state.todoList[id - 1].title = newTitle;
        }
        state.book = undefined;
      })
    ),
  removeBook: (bookId) =>
    set(
      produce((state) => {
        state.todoList = state.todoList.filter((todo) => todo.id !== bookId);
      })
    ),
  loadUpdateForm: (book) =>
    set(
      produce((state) => {
        state.book = book;
        console.log("loadUpdateForm ", book);
      })
    ),
  setFilter: (filter) =>
    set(
      produce((state) => {
        state.filter = filter;
      })
    ),
  handleToggle: (id) =>
    set(
      produce((state) => {
        state.todoList = state.todoList.map((task) => {
          return task.id === Number(id)
            ? { ...task, complete: !task.complete }
            : { ...task };
        });
      })
    )
}));
