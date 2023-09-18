

const Navbar = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/service", name: "Service" },
        { id: 3, path: "/blog", name: "Blog" },
        { id: 4, path: "/about", name: "About" },
        { id: 5, path: "/contact", name: "Contact Us" }
    ];
    return (
        <nav>
            {
                routes.map(route => <li key={route.id}>
                    <a href={route.path}>{route.name}</a>
                </li>)
            }
        </nav>
    );
};

export default Navbar;