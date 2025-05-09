{
  /* Purpose : A reusable input fields component for handling user input across forms.
    Contributor : Daksh asati(REG: 23BEC7195) */
}

import React from "react";

function InputField({
  label,
  type = "text",
  id,
  placeholder,
  value,
  onChange,
  disabled = false,
}) {
  return (
    <div className="mb-4 relative">
      <label htmlFor={id} className="block text-black text-base mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`border-2 border-black ${
          disabled ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200"
        } w-full rounded-lg px-4 py-2 
                        focus:outline-none ${
                          !disabled &&
                          "focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        } pr-8`}
      />
    </div>
  );
}

export default InputField;
