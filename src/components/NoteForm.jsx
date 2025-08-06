import React, { useState } from "react";
import "../App.css";

const NoteForm = () => {
  const [note, setNote] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note.title.trim() || !note.description.trim()) return;

    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    localStorage.setItem("notes", JSON.stringify([...storedNotes, note]));

    setNote({ title: "", description: "" });
    window.dispatchEvent(new Event("storage")); // Trigger update in NoteList
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Note Title"
        value={note.title}
        onChange={handleChange}
        className="note-input"
      />
      <textarea
        name="description"
        placeholder="Note Description"
        value={note.description}
        onChange={handleChange}
        className="note-textarea"
      ></textarea>
      <button type="submit" className="note-button">Add Note</button>
    </form>
  );
};

export default NoteForm;
