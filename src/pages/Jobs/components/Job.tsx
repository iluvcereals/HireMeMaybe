import { type JobProps } from './Job.types';
import { ImLocation, ImSpinner, ImCrying, ImEvil } from 'react-icons/im';

function Job({ company, position, location, status }: JobProps) {
    return (
        <div className="group bg-white h-48 rounded-md p-8 text-sm shadow-lg md:text-md hover:shadow-xl transition-shadow">
            <div className="">
                <header className="flex gap-x-2">
                    <div className="group-hover:text-white transition-colors ease-in-out duration-150 flex justify-center items-center text-4xl size-12 border-solid border-2 border-red rounded-md bg-black text-stone-400">
                        {company[0].toUpperCase()}
                    </div>
                    <div>
                        <h2 className="font-bold uppercase text-lg">{position}</h2>
                        <h3 className="text-gray-500 text-md -mt-1 uppercase">{company}</h3>
                    </div>
                </header>
                <div className="border-t-2 border-t-slate-200 mt-1 pt-2">
                    <p className="text-gray-500 flex gap-x-2">
                        <span className="self-center text-black">
                            <ImLocation />
                        </span>
                        {location}
                    </p>
                    <p className="text-gray-500 flex gap-x-2">
                        <span className={`self-center text-black ${status === 'pending' ? 'animate-spin' : ''}`}>
                            {status === 'pending' ? <ImSpinner /> : status === 'interview' ? <ImEvil /> : <ImCrying />}
                        </span>
                        {status}
                    </p>
                </div>
            </div>
            <div className="space-x-1 text-slate-400 mt-2">
                {/* TODO: Implement buttons. Make sure that Form submissions are handle by Form api via action and edit feature is managed by rtk  */}
                <button className="hover:text-black transition-colors ease-in-out duration-150">Edit</button>
                <button className="hover:text-black transition-colors ease-in-out duration-150">Delete</button>
            </div>
        </div>
    );
}

export default Job;
