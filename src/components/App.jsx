import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteForm from "./NoteForm";
import initialNotes from "../notes";

function createNote(note) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}

function App() {
  const [input, setInput] = useState({ title: null, content: null });
  const [notes, setNotes] = useState(initialNotes);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <NoteForm onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
//{notes.map(createNote)}
