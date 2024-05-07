import { createSlice } from '@reduxjs/toolkit';
import { type JobType } from '@/utils';

const initialState: JobType = {
    position: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    status: 'pending',
    statusOptions: ['pending', 'interview', 'rejected'],
};

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        clearJob: () => {
            return initialState;
        },
    },
});

export const { clearJob } = jobSlice.actions;
export default jobSlice.reducer;
