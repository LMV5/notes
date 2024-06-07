import { type ReactNode } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";

type HeaderProps = {
  children: ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex flex-col text-lime-50">
      <HiOutlinePencilSquare className="h-16 w-16 self-center mt-3" />
      {children}
    </header>
  );
}
