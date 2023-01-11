import React from "react";
import BookList from "./BookList";
import BookAdd from "./BookAdd";
import UpdateBook from "./UpdateBook";

function App() {
  return (
    <div className="App">
      <BookAdd />
      <BookList />
      <UpdateBook />
    </div>
  );
}

export default App;
