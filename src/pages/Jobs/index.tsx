import JobsContainer from './components/JobsContainer';

function Jobs() {
    return (
        <div className="bg-slate-100 shadow-lg rounded-md p-8">
            <h1 className="tracking-wide text-4xl ml-4 mb-4">Jobs</h1>
            <JobsContainer />
        </div>
    );
}

export default Jobs;
