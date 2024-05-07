import { NavLinks } from '@/components';
import { useAppSelector } from '@/hooks';

function Sidebar() {
    const isSidebarOpen = useAppSelector((state) => state.userState.isSidebarOpen);

    if (!isSidebarOpen) {
        return null;
    }
    return (
        <div className="hidden h-full w-72 md:flex flex-col items-center border-solid  text-4xl pt-5 bg-slate-300">
            <NavLinks />
        </div>
    );
}

export default Sidebar;
