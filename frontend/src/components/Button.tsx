import { MouseEvent } from "react";

interface props {
  label: string;
  onclick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ label, onclick }: props) => {
  return (
    <div className="mt-[10px]">
      <button
        className="w-full h-10 text-lg border border-transparent rounded bg-primary text-text hover:bg-opacity-95 focus:border-transparent focus:ring-0 active:border-text"
        onClick={onclick}
      >
        {label}
      </button>
    </div>
  );
};
