import React, { useState } from "react";
import { useStore } from "./Library";

const UpdateBookForm = () => {
  const bookFromStore = useStore((state) => state.book);
  const updateBook = useStore((state) => state.updateBook);
  const [newBookTitle, setNewBookTitle] = useState("");

  const handleChange = (e) => {
    setNewBookTitle(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    updateBook(bookFromStore?.id, newBookTitle);
    setNewBookTitle("");
  };
  return (
    <div className={bookFromStore ? "mydiv" : "mydiv hidden"}>
      <input
        placeholder="Update Book Name"
        value={newBookTitle}
        type="text"
        onChange={handleChange}
      />
      <button onClick={() => handleSubmit(newBookTitle)} className="edit">
        Edit
      </button>
    </div>
  );
};

export default UpdateBookForm;
