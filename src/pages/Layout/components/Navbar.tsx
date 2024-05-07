import { toggleSidebar } from '@/features/user/userSlice';
import { useAppDispatch } from '@/hooks';

function Navbar() {
    const dispatch = useAppDispatch();
    function handleSidebar() {
        dispatch(toggleSidebar());
    }
    return (
        <nav className="h-32 bg-slate-300">
            <button onClick={handleSidebar}>Click me</button>
        </nav>
    );
}

export default Navbar;
