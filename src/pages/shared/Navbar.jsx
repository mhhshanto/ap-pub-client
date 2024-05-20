import { useContext, useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

// import icons from react icons
import { FaXmark, FaBarsStaggered } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { cartDataState, user } = useContext(AuthContext)


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About app", path: "/about" },
        { link: "Areas we cover", path: "/faq" },
        { link: "Publish with us", path: "/admin/dashboard" },
        { link: "Our advisors", path: "/underdevlop" },
    ];

    return (
        <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
                }`}>
                <div className="flex justify-between items-center text-base lg:gap-8 gap-4">
                    <Link to="/" className="lg:text-2xl font-bold text-blue-700 flex items-center gap-2">
                        <img src="app-logo.png" alt="Logo" className="inline-block lg:w-20 w-16" />Australia Pacific Publisher
                    </Link>



                    <ul className="md:flex space-x-12 hidden navitems">

                        {
                            navItems.map(({ link, path }) => <Link key={link} to={path} className="link block text-base cursor-pointer uppercase text-black hover:text-blue-700">
                                {link}
                            </Link>)
                        }
                    </ul>

                    <Link to='/cart'>
                        <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition-all duration-300 cursor-pointer px-5 relative rounded-md flex justify-center items-center">
                            <button className="font-bold text-2xl"><TiShoppingCart /></button>
                            <button className="px-[6px] text-sm rounded-full absolute -top-4 bg-red-800 text-white -right-2">{cartDataState}</button>
                        </div>
                    </Link>

                    <div className="space-x-12 hidden lg:flex items-center">
                        {
                            user ? <Link to='/logout'>
                                <button> <IoMdLogOut className="text-3xl hover:text-blue-700" /></button>
                            </Link> :
                                <Link to='/login'>
                                    <button> <FaUserCircle className="text-3xl hover:text-blue-700" /></button>
                                </Link>
                        }
                    </div>

                    {/* menu btn, visible on mobile screen */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-black focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <FaXmark className="h-6 w-6 text-black" />
                            ) : (
                                <FaBarsStaggered className="h-5 w-5 text-black" />
                            )}
                        </button>
                    </div>

                </div>

                <div
                    className={`space-y-4 px-5  py-7  rounded-sm transition duration-500 bg-blue-700 ${isMenuOpen ? "translate-x-0" : "-translate-x-[500px] absolute"}`}
                >
                    {
                        navItems.map(({ link, path }) => <a
                            href={path}
                            key={link}
                            onClick={toggleMenu}
                            className="block  text-white hover:text-red-500"
                        >
                            {link}
                        </a>)
                    }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;