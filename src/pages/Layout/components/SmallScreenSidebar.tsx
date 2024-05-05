import { useAppSelector, useAppDispatch } from '@/hooks';
import { NavLinks } from '@/components';
import { toggleSidebar } from '@/features/user/userSlice';

function SmallScreenSideBar() {
    const isSidebarOpen = useAppSelector((state) => state.userState.isSidebarOpen);
    const dispatch = useAppDispatch();

    function handleClick() {
        dispatch(toggleSidebar());
    }

    if (!isSidebarOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 grid place-items-center md:hidden">
            <div className="w-96 h-[90vh] bg-slate-50 p-8 rounded-lg shadow-lg relative">
                <button className="absolute top-1 left-2 text-red-600 hover:underline" onClick={handleClick}>
                    Close
                </button>
                <div className="text-4xl">
                    <NavLinks />
                </div>
            </div>
        </div>
    );
}

export default SmallScreenSideBar;
