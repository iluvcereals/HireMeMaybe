import { type JobProps } from './Job.types';

function Job({ company, position, location, status }: JobProps) {
    return (
        <div className="bg-white flex gap-x-2 h-40 rounded-md p-8 text-sm shadow-lg md:text-md hover:shadow-xl ease-in-out transition-shadow duration-500">
            <div className="flex justify-center items-center text-4xl size-24 border-solid border-2 border-red rounded-md bg-black text-white">
                {company[0].toUpperCase()}
            </div>
            <div className="w-full h-full ml-5 flex flex-col justify-center gap-y-1">
                <h2 className="font-bold uppercase text-lg">{company}</h2>
                <p className="text-black">
                    position: <span className="text-gray-500">{position}</span>
                </p>
                <p className="text-black">
                    location: <span className="text-gray-500">{location}</span>
                </p>
                <p className="text-black">
                    status: <span className="text-gray-500">{status}</span>
                </p>
            </div>
        </div>
    );
}

export default Job;
