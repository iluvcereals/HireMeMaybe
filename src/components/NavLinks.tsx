import { NavLink } from 'react-router-dom';
import { links } from '@/utils';

function NavLinks() {
    return (
        <div className="flex flex-col gap-y-6 mt-5">
            {links.map((link) => {
                const { id, text, url } = link;
                return (
                    <NavLink
                        to={url}
                        key={id}
                        end={url === '/app'}
                        className={({ isActive }) => {
                            return isActive
                                ? 'underline'
                                : 'hover:translate-x-2 transition-transform ease-in-out duration-150';
                        }}
                    >
                        {text}
                    </NavLink>
                );
            })}
        </div>
    );
}

export default NavLinks;
