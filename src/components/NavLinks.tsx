import { NavLink } from 'react-router-dom';
import { links } from '@/utils';

function NavLinks() {
    return (
        <div className="flex flex-col gap-y-6 mt-5 text-slate-600">
            {links.map((link) => {
                const { id, text, url, icon } = link;
                return (
                    <NavLink
                        to={url}
                        key={id}
                        end={url === '/app'}
                        className={({ isActive }) => {
                            return isActive
                                ? 'text-black translate-x-2 flex gap-x-5'
                                : 'hover:translate-x-2 transition-transform duration-300 flex gap-x-5';
                        }}
                    >
                        <span>{icon}</span>
                        {text}
                    </NavLink>
                );
            })}
        </div>
    );
}

export default NavLinks;
