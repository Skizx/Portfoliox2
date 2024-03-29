import { Link, useLocation } from "react-router-dom"

function Navbar() {

    const inactiveLink = 'px-2 py-1 md:px-5';
    const activeLink = 'bg-[#E6B82A] px-2 py-1 border-transparent rounded-3xl md:px-5 ';
    const router = useLocation()
    const { pathname } = router;

    return (
        <>
            <nav className="flex justify-center items-center font-semibold mt-5 pt-1 md:text-xl">
                <ul className="flex gap-3 p-[10px] backdrop-blur-xl border-transparent border rounded-[50px] md:gap-14">
                    <li className={pathname === '/' ? activeLink : inactiveLink}><Link to='/'>Home</Link></li>
                    <li className={pathname === '/about' ? activeLink : inactiveLink}><Link to='/about'>About</Link></li>
                    <li className={pathname === '/play' ? activeLink : inactiveLink}><Link to='/play'>Work</Link></li>
                    <li className={pathname === '/contact' ? activeLink : inactiveLink}><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar