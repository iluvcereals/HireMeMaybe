import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Landing, Login, Register, SharedLayout, Dashboard, AddJob, EditUser, Jobs } from './pages';

function App() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Landing />,
        },
        {
            path: '/app',
            element: <SharedLayout />,
            children: [
                {
                    index: true,
                    element: <Dashboard />,
                },
                {
                    path: 'addJob',
                    element: <AddJob />,
                },
                {
                    path: 'editUser',
                    element: <EditUser />,
                },
                {
                    path: 'jobs',
                    element: <Jobs />,
                },
            ],
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/register',
            element: <Register />,
        },
    ]);
    return <RouterProvider router={routes} />;
}

export default App;
