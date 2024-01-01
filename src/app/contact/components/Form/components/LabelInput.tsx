import { type ReactElement } from "react";

interface LabelInputProps {
  type: string;
  name: string;
  placeholder: string;
}

export default function LabelInput({
  type,
  name,
  placeholder
}: LabelInputProps): ReactElement {
  return (
    <label className="w-full">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="duration-200 ease-in border-2 border-RomanSilver rounded-2xl px-8 py-4
        bg-Gray2 font-semibold w-full"
        autoComplete="true"
        required
      />
    </label>
  );
}
