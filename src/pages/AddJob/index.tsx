import { FormInput, FormSelect } from '@/components';
import { useAppSelector } from '@/hooks';
import { Form } from 'react-router-dom';

function AddJob() {
    const { company, position, location, status, statusOptions } = useAppSelector((state) => state.jobState);
    return (
        <section className="p-8 w-full bg-slate-100 rounded-md shadow-lg hover:shadow-2xl transition-shadow ease-in-out duration-300">
            <h1 className="tracking-wide text-4xl ml-4 mb-4">Add Job</h1>
            <Form className="grid md:grid-cols-2">
                {/* TODO: remove defaults  */}
                <FormInput type="text" name="company" defaultValue={company} />
                <FormInput type="text" name="position" defaultValue={position} />
                <FormInput type="text" name="location" defaultValue={location} />
                {/* TODO: FormSelect */}
                <FormSelect values={statusOptions} name="status" currentValue={status} />

                <div className="px-4 flex gap-x-4 mt-2">
                    {/* TODO: Submit btn */}
                    <button className="bg-black hover:bg-gray-700 text-white transition-colors ease-in duration-150 px-2 py-1 rounded-md">
                        Submit
                    </button>
                    {/* TODO: Clear btn */}
                    <button className="bg-red-500 hover:bg-red-700 text-white transition-colors ease-in duration-150 px-2 py-1 rounded-md">
                        Clear
                    </button>
                </div>
            </Form>
        </section>
    );
}

export default AddJob;
