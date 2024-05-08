import { type FormInputProps } from './FormInput.types';

function FormInput({ type, name, label, defaultValue }: FormInputProps) {
    {
        /* TODO: remove defaults  */
    }
    return (
        <div className="mb-2 px-4">
            <label htmlFor={name} className="block text-gray-500">
                {label || name}
            </label>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue || ''}
                className="border-solid border-2 border-slate-300 rounded-md
                w-full px-2 outline-none h-10"
            />
        </div>
    );
}

export default FormInput;
