"use client";

type SelectProps = {
  onSelect: (value: string) => void;
  options: {
    key: string;
    value: string;
  }[];
};

export const Select = ({ options, onSelect }: SelectProps) => {
  return (
    <div>
      <select
        onChange={(e) => {
          onSelect(e.target.value);
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="" disabled selected>
          --Select Bank--
        </option>
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};
