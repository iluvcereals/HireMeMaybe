export interface JobType {
    position: string;
    company: string;
    location: string;
    status: string;
    statusOptions: StatusOptionsType;
}

export type StatusOptionsType = Array<'interview' | 'pending' | 'rejected'>;

export interface AllJobsType {
    jobsTotal: number;
    pendingTotal: number;
    rejectedTotal: number;
    interviewtedTotal: number;
    allJobs: JobType[];
}

export interface UserType {
    username: string;
    jwt: string;
    isSidebarOpen: boolean;
}
