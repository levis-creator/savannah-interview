import React, { FC, InputHTMLAttributes } from 'react'
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name:string;
    label:string;
}
const Input:FC<InputProps> = ({name, label,  ...props}) => {
    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input {...props} name={name} id={name} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
    )
}

export default Input