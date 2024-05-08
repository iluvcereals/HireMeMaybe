import { AiFillDiff, AiFillHome, AiFillShopping, AiOutlineUser } from 'react-icons/ai';

export const links = [
    {
        id: 1,
        text: 'Home',
        url: '/app',
        icon: <AiFillHome />,
    },
    {
        id: 2,
        text: 'Edit Profile',
        url: '/app/editUser',
        icon: <AiOutlineUser />,
    },
    {
        id: 3,
        text: 'Add Job',
        url: '/app/addJob',
        icon: <AiFillDiff />,
    },
    {
        id: 4,
        text: 'Browse Jobs',
        url: '/app/jobs',
        icon: <AiFillShopping />,
    },
];

export const tempData = [
    {
        id: 1,
        company: 'tazz',
        position: 'account executive',
        location: 'saint-bruno-de-montarville',
        status: 'pending',
    },
    { id: 2, company: 'wikibox', position: 'media manager ii', location: 'primošten', status: 'pending' },
    { id: 3, company: 'zoombeat', position: 'cost accountant', location: 'watulimo', status: 'pending' },
    { id: 4, company: 'devify', position: 'vp sales', location: 'zhangguanying', status: 'pending' },
    { id: 5, company: 'topicshots', position: 'editor', location: 'trzciana', status: 'pending' },
    { id: 6, company: 'gabcube', position: 'social worker', location: 'helsingborg', status: 'pending' },
    { id: 7, company: 'skipfire', position: 'analog circuit design manager', location: "l'aigle", status: 'pending' },
    { id: 8, company: 'vidoo', position: 'sales representative', location: 'entebbe', status: 'pending' },
    { id: 9, company: 'feedmix', position: 'general manager', location: 'kryevidh', status: 'pending' },
    { id: 10, company: 'layo', position: 'help desk operator', location: 'havtsal', status: 'pending' },
];
