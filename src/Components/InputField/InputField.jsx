import React from 'react';

function InputField({ label, type = "text", id, placeholder, value, onChange }) {
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
                className={`border-2 border-black bg-gray-200 w-full rounded-lg px-4 py-2 
                        focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-8`} // 👈 Add this pr-14
/>

        </div>
    );
}

export default InputField;
