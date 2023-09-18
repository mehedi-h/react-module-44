import { useState } from 'react';
import { TfiMenuAlt } from 'react-icons/tfi';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/service", name: "Service" },
        { id: 3, path: "/blog", name: "Blog" },
        { id: 4, path: "/about", name: "About" },
        { id: 5, path: "/contact", name: "Contact Us" }
    ];
    return (
        <nav className="md:my-5">
            <div onClick={() = setOpen(true)}>
                <TfiMenuAlt className='text-xl md:hidden'></TfiMenuAlt>
            </div>
            <ul className="md:flex md:justify-center md:items-center">
                {
                    routes.map(route => <li key={route.id} className="text-sm font-medium md:text-base md:font-semibold md:mr-8">
                        <a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul>
        </nav>
    );
};


export default Navbar;