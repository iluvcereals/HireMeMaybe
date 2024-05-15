import { Link } from 'react-router-dom';

function Landing() {
    return (
        <main className="h-screen w-screen bg-indigo-100 grid place-items-center">
            <div className="border-2 border-black px-16 size-11/12 flex flex-col justify-center gap-y-12 items-center">
                {/* TODO: Think of better message and layout. Check dribble */}
                <h1 className="text-7xl text-center tracking-wide text-gray-500">
                    Because your <span className="text-indigo-500 uppercase">Job Search</span> saga deserves its own
                    dashboard
                </h1>
                <div>
                    <button className="bg-black text-white border-2 border-black py-1 px-2 rounded-md">
                        <Link to="/login">Get Started</Link>
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Landing;
