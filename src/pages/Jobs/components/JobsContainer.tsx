import { tempData } from '@/utils';
import Job from './Job';
import { useAppSelector } from '@/hooks';

function JobsContainer() {
    const isSidebarOpen = useAppSelector((state) => state.userState.isSidebarOpen);
    return (
        <div
            className={
                isSidebarOpen
                    ? 'grid grid-cols-1 gap-4 xl:grid-cols-2 p-4'
                    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4'
            }
        >
            {tempData.map((temp) => {
                const { company, location, status, position, id } = temp;
                return <Job company={company} location={location} status={status} position={position} key={id} />;
            })}
        </div>
    );
}

export default JobsContainer;
