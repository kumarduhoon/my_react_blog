import React from 'react'

const Select = React.forwardRef(function ({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = React.useId();
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''>{label}</label>}
            <select
                id={id}
                {...props}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
            >
                {options.length > 0 && options?.map((option) => (<option key={option}>{option}</option>))}
            </select>
        </div>
    )

})


export default Select