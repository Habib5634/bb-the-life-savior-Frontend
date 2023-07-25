import React from 'react'

const InputType = ({ labelFor, labelText, inputType, value, onChange, name }) => {
    return (
        <>
            <div className="block text-gray-700 text-sm font-bold mb-2">
                <label htmlFor={labelFor}>{labelText}</label>
                <input
                    type={inputType}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    )
}

export default InputType