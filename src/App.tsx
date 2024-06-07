import Note from "./components/Notes.tsx";
import Header from "./components/Header.tsx";
import NoteList from "./components/NoteList.tsx";
import NewNote from "./components/NewNote.tsx";
import { useState } from "react";

export type Note = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function handleAddNote(note: string, summary: string) {
    setNotes((prevNotes) => {
      const newNote: Note = {
        id: Math.random(),
        title: note,
        description: summary,
      };
      return [...prevNotes, newNote];
    });
  }

  function handleDeleteNote(id: number) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <main className="flex flex-col bg-sky-950 w-100 md:w-10/12 lg:w-6/12 min-h-96 m-5 md:mx-auto md:mt-20 items-center">
      <Header>
        <h1 className="py-4 font-bold text-3xl text-emerald-50">Your Notes</h1>
      </Header>
      <NewNote onAddNote={handleAddNote} />
      <NoteList onDeleteNote={handleDeleteNote} notes={notes} />
    </main>
  );
}
