import { toggleSidebar } from '@/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
    const dispatch = useAppDispatch();
    const isSidebarOpen = useAppSelector((state) => state.userState.isSidebarOpen);
    const navigate = useNavigate();
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
            <div>
                <button
                    onClick={() => navigate('/login')}
                    type="button"
                    className="border-2 border-black rounded-md px-2 py-1"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
