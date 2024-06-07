import { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export default function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === "hint") {
    <aside>
      <p>{children}</p>
    </aside>;
  }

  return (
    <aside>
      <p className="py-10 text-emerald-50 px-7 text-center">{children}</p>
    </aside>
  );
}
