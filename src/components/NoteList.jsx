import React, { useEffect, useState } from "react";
import "../App.css";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  const loadNotes = () => {
    const stored = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(stored);
  };

  useEffect(() => {
    loadNotes();
    const handleStorageChange = () => loadNotes();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const deleteNote = (index) => {
    const updated = [...notes];
    updated.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(updated));
    setNotes(updated);
  };

  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p className="no-notes">No notes yet. Add one!</p>
      ) : (
        notes.map((note, idx) => (
          <div key={idx} className="note-card">
            <h3 className="note-title">{note.title}</h3>
            <p className="note-description">{note.description}</p>
            <button className="delete-button" onClick={() => deleteNote(idx)}>
              🗑 Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;
