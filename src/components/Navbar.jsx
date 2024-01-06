import { Link, useLocation } from "react-router-dom"

function Navbar() {

    const inactiveLink = 'px-2 py-1';
    const activeLink = 'bg-[#090979] px-2 py-1 border-transparent rounded-3xl';
    const router = useLocation()
    const { pathname } = router;

    return (
        <>
            <nav className="flex justify-center items-center mt-5 pt-1 2xl:text-lg ">
                <ul className="flex gap-3 p-[10px] backdrop-blur-xl border-transparent border rounded-[50px]">
                    <li className={pathname === '/' ? activeLink : inactiveLink}><Link to='/'>Work</Link></li>
                    <li className={pathname === '/about' ? activeLink : inactiveLink}><Link to='/about'>About</Link></li>
                    <li className={pathname === '/play' ? activeLink : inactiveLink}><Link to='/play'>Play</Link></li>
                    <li className={pathname === '/contact' ? activeLink : inactiveLink}><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar