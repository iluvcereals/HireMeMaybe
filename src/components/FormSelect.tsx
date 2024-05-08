import { useState } from 'react';
import { type FormSelectProps } from './FormSelect.types';
function FormSelect({ values, name, label, currentValue }: FormSelectProps) {
    const [selectValue, setSelectValue] = useState(currentValue || 'pending');
    return (
        <div className="mb-2 px-4">
            <label htmlFor={name} className="block text-gray-500">
                {label || name}
            </label>
            <select
                name={name}
                id={name}
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                className=" bg-white border-solid border-2 border-slate-300 rounded-md
                w-full px-2 outline-none h-10"
            >
                {values.map((value, index) => {
                    return (
                        <option value={value} key={index}>
                            {value}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default FormSelect;
