import Note from "./Notes.tsx";
import InfoBox from "./InfoBox.tsx";
import { type Note as NoteType } from "../App.tsx";
import { type ReactNode } from "react";

type NoteListProps = {
  notes: NoteType[];
  onDeleteNote: (id: number) => void;
};

export default function NoteList({ notes, onDeleteNote }: NoteListProps) {
  if (notes.length === 0) {
    return (
      <InfoBox mode="hint">You have no notes yet. Start adding some!</InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (notes.length >= 10) {
    warningBox = <InfoBox mode="warning">You put too much notes</InfoBox>;
  }

  return (
    <>
      {warningBox}
      <ul className="grid md:grid-cols-2 gap-2 w-10/12 lg:w-9/12">
        {notes.map((note) => (
          <li key={note.id}>
            <Note title={note.title} id={note.id} onDelete={onDeleteNote}>
              <p>{note.description}</p>
            </Note>
          </li>
        ))}
      </ul>
    </>
  );
}
