import { ChangeEvent } from "react";

interface props {
  label: string;
  placeholder: string;
  onchange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const InputBox = ({ label, placeholder, onchange, type }: props) => {
  return (
    <div>
      <h2 className="text-lg text-primary mb-[5px] font-semibold">{label}</h2>
      <input
        className="w-full h-10 border-2 rounded p-[5px] border-secondaryLight mb-[15px]"
        placeholder={placeholder}
        type={type || "text"}
        onChange={onchange}
      ></input>
    </div>
  );
};
