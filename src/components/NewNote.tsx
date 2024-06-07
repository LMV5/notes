import { FormEvent, useRef } from "react";

type NewNoteProps = {
  onAddNote: (note: string, summary: string) => void;
};

export default function NewNote({ onAddNote }: NewNoteProps) {
  const note = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredNote = note.current!.value;
    const enteredSummary = summary.current!.value;

    if (enteredNote === "" && enteredSummary === "") {
      return;
    }

    e.currentTarget.reset();
    onAddNote(enteredNote, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-9/12">
      <input
        type="text"
        id="note"
        ref={note}
        placeholder="Your note"
        className="h-12 pl-4"
      />
      <input
        type="text"
        id="summary"
        ref={summary}
        placeholder="Short summary"
        className="h-12 pl-4"
      />
      <button className="bg-sky-300 hover:bg-sky-400 text-sky-950 p-3 font-semibold">
        Add note
      </button>
    </form>
  );
}
