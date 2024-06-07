import { type PropsWithChildren } from "react";
import { HiOutlineTrash } from "react-icons/hi2";

type NoteProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function Note({ title, id, children, onDelete }: NoteProps) {
  return (
    <article className="flex gap-2 justify-between text-emerald-50 hover:text-sky-950 hover:bg-cyan-100 hover:bg-opacity-70 min-h-10 p-2 my-5 transition-all duration-300 rounded-lg">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)} className="self-start pt-1">
        <HiOutlineTrash className="hover:text-rose-800 w-5 h-5" />
      </button>
    </article>
  );
}
