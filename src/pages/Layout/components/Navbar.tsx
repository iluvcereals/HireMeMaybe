import { toggleSidebar } from '@/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiCaretDown, BiUserCircle } from 'react-icons/bi';
import { useState } from 'react';

function Navbar() {
    const dispatch = useAppDispatch();
    const { isSidebarOpen, username } = useAppSelector((state) => state.userState);
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState<boolean>(false);
    function handleSidebar() {
        dispatch(toggleSidebar());
    }
    return (
        <nav className="h-32 bg-slate-300 flex justify-between items-center px-5">
            <div>
                <button
                    onClick={handleSidebar}
                    className={`flex justify-center items-center size-12 text-2xl ${isSidebarOpen ? 'rotate-90' : ''} transition-all duration-300`}
                >
                    <AiOutlineMenu />
                </button>
            </div>
            <h1>WHAT AM I DOING WITH MY LIFE</h1>
            <div className="flex flex-col  gap-y-2 relative w-32">
                <button
                    onClick={() => setShowLogout(!showLogout)}
                    className="flex justify-between rounded-sm h-7 w-32 px-2 py-0 z-50 bg-slate-800 text-slate-200"
                >
                    <span className="self-center text-2xl">
                        <BiUserCircle />
                    </span>
                    {username}
                    <span className="self-center">
                        <BiCaretDown />
                    </span>
                </button>
                <button
                    onClick={() => navigate('/login')}
                    type="button"
                    className={`px-2 py-0 rounded-sm absolute inset-0 m-auto h-7 w-32 bg-slate-800 text-slate-200 ${showLogout ? 'translate-y-8 opacity-100' : 'opacity-0 translate-y-0 z-0'} transition-opacity duration-150 ease-in`}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
