import { Link } from 'react-router-dom';

function Landing() {
    return (
        <main className="h-screen w-screen bg-slate-50 grid place-items-center">
            <div className="border-2 border-black size-9/12 grid grid-cols-2 gap-5 p-8">
                <div className="border-2 border-black p-2">
                    {/* TODO: Think of better message and layout. Check dribble */}
                    <h1 className="text-7xl tracking-wide text-gray-500">
                        Unemployed? <span className="text-indigo-500">Not for long</span>
                    </h1>
                    <div>
                        <button className="bg-black text-white border-2 border-black py-1 px-2 rounded-md">
                            <Link to="/login">Get Started</Link>
                        </button>
                    </div>
                </div>
                {/* TODO: Add image */}
                <div className="border-2 border-black">image</div>
            </div>
        </main>
    );
}

export default Landing;
