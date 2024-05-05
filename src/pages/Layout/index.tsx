import { Outlet } from 'react-router-dom';
import { useAppSelector } from '@/hooks';
import { SmallSidebar, Navbar, Sidebar } from './components';
function SharedLayout() {
    const isSidebarOpen = useAppSelector((state) => state.userState.isSidebarOpen);
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex w-full flex-1 overflow-hidden">
                <SmallSidebar />
                <Sidebar />
                <div
                    className={`flex-1 bg-slate-200 py-10 px-12 overflow-auto border-2 border-slate-300 ${isSidebarOpen ? 'md:w-2/3' : 'w-full'}`}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default SharedLayout;
