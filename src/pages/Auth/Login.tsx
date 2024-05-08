import { FormInput } from '@/components';
import { Form, Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <section className="h-screen grid place-items-center bg-slate-50">
            <div className="bg-white hover:shadow-2xl transition-shadow ease-in-out duration-500 border-solid border-2 border-black w-96 h-[28rem] rounded-md">
                <h1 className="text-center m-4 text-4xl">Login</h1>
                <Form className="mt-8">
                    {/* TODO: remove defaults  */}
                    <FormInput type="text" name="username" />
                    <FormInput type="password" name="password" />
                    <div className="px-4 mt-5">
                        <button
                            type="submit"
                            className="border-solid border-2 border-black w-full h-10 rounded-md bg-black text-white hover:bg-gray-700 ease-in transition-colors duration-300"
                        >
                            Login
                        </button>
                    </div>
                    <div className="px-4 mt-5">
                        <button
                            type="button"
                            className="shadow-lg border-2 border-hidden w-full h-10 rounded-md  bg-gray-300  hover:bg-gray-400 ease-in transition-colors duration-300"
                            onClick={() => navigate('/app/jobs')}
                        >
                            Guest
                        </button>
                    </div>
                    <div className="m-4 text-center">
                        <p>
                            Not a member?
                            <span className="ml-1">
                                <Link to="/register" className="text-pink-600 hover:text-pink-700">
                                    Register
                                </Link>
                            </span>
                        </p>
                    </div>
                </Form>
            </div>
        </section>
    );
}

export default Login;
