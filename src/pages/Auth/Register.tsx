import { FormInput } from '@/components';
import { Form, Link } from 'react-router-dom';

function Register() {
    return (
        <section className="h-screen grid place-items-center bg-slate-50">
            <div className="bg-white hover:shadow-2xl transition-shadow ease-in-out duration-500 border-solid border-2 border-black w-96 h-[28rem] rounded-md">
                <h1 className="text-center m-4 text-4xl">Register</h1>
                <Form className="mt-8">
                    <FormInput type="text" name="username" />
                    <FormInput type="email" name="email" />
                    <FormInput type="password" name="password" />
                    <div className="px-4 mt-5">
                        <button
                            type="submit"
                            className="border-solid border-2 border-black w-full h-10 rounded-md bg-black text-white hover:bg-gray-800 ease-in transition-colors duration-300"
                        >
                            Register
                        </button>
                    </div>
                    <div className="m-4 text-center">
                        <p>
                            Already a member?
                            <span className="ml-1">
                                <Link to="/login" className="text-pink-600 hover:text-pink-700">
                                    Login
                                </Link>
                            </span>
                        </p>
                    </div>
                </Form>
            </div>
        </section>
    );
}

export default Register;
