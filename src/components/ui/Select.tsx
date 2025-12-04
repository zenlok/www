"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";

export interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className = "", containerClassName = "", options, placeholder, ...props },
    ref,
  ) => {
    return (
      <div className={`relative ${containerClassName}`}>
        <select
          ref={ref}
          className={`w-full appearance-none rounded-none border border-zinc-800 bg-zinc-900 px-4 py-3 pr-10 text-sm font-mono text-zinc-400 focus:border-white focus:outline-none focus:ring-1 focus:ring-white disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
          <ChevronDown size={16} />
        </div>
      </div>
    );
  },
);

Select.displayName = "Select";
