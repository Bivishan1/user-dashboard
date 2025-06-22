// components/SelectDropdown.tsx
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectDropdownProps {
  id?: string;
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  id = "select",
  label,
  options = [],
  value,
  onChange,
  className = "cursor-pointer",
}) => {
  return (
    <div className={`max-w-sm mx-auto ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="text-[10px] sm:text-base"
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
