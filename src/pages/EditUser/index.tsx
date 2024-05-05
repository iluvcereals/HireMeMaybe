import { FormInput } from '@/components';
import { useState } from 'react';
import { Form } from 'react-router-dom';

function EditUser() {
    const [user, setUser] = useState({
        name: 'abdul',
        lastName: 'jabar',
        location: 'Canada',
        email: 'abudl@gmail.com',
    });

    return (
        <section className="p-8 w-full bg-slate-100 rounded-md shadow-lg hover:shadow-2xl transition-shadow ease-in-out duration-300">
            <h1 className="tracking-wide text-4xl ml-4 mb-4">Profile</h1>
            <Form className="grid md:grid-cols-2   ">
                <FormInput type="text" name="name" defaultValue={user.name} />
                <FormInput type="text" name="lastName" defaultValue={user.lastName} label="last name" />
                <FormInput type="text" name="location" defaultValue={user.location} />
                <FormInput type="text" name="email" defaultValue={user.email} />

                <div className="px-4 flex gap-x-4 mt-2">
                    {/* TODO: Submit btn */}
                    <button className="bg-green-300 hover:bg-green-400 transition-colors ease-in duration-150 px-2 py-1 rounded-md">
                        Submit
                    </button>
                    {/* TODO: Clear btn */}
                    <button className="bg-red-400 hover:bg-red-500 transition-colors ease-in duration-150 px-2 py-1 rounded-md">
                        Clear
                    </button>
                </div>
            </Form>
        </section>
    );
}

export default EditUser;
