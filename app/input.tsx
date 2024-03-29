import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ label, type, value, onChange }: InputProps) {
  return (
    <label className="block mb-4">
      <span className="text-gray-700 font-bold">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        className="text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </label>
  );
}
