import { useEffect, useState } from "react"
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaPlusMinus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; 

const Header = () => {

    const [active, setActive] = useState('')
    const [isScrolled, setIsScrolled] = useState(false)

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();




    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [])


    const [contrast, setContrast] = useState(false)

    const addContrast = () => {

        if (contrast === false) {
            document.body.classList.add('contrast')
            // const mainDiv = document.querySelector('.main_div'); // Selects the first element with class "main_div"
            // if (contrast === false && mainDiv) {
            //     mainDiv.classList.add('contrast');
            // }
        }

        setContrast(true)
    }

    const removeContrast = () => {

        if (contrast === true) {
            document.body.classList.remove('contrast')
        }
        setContrast(false)
    }

    const [fontSize, setFontSize] = useState(null)

    // Font control functions
    const fontIncrease = () => {
        setFontSize(prev => {
            const newSize = prev !== null ? prev + 2 : 18; // Start from 18px if null
            return newSize > 64 ? 64 : newSize; // Max limit
        });
    };

    const fontDefault = () => {
        setFontSize(null); // Revert to CSS-defined font sizes
    };

    const fontDecrease = () => {
        setFontSize(prev => {
            const newSize = prev !== null ? prev - 2 : 14; // Start from 14px if null
            return newSize < 14 ? 14 : newSize; // Min limit
        });
    };

    // Apply font size to all h1-h6 and p tags
    useEffect(() => {
        const tags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        const elements = tags.flatMap(tag => Array.from(document.querySelectorAll(tag)));

        elements.forEach(el => {
            if (fontSize === null) {
                el.style.removeProperty('font-size');
            } else {
                el.style.fontSize = `${fontSize}px`;
            }
        });
    }, [fontSize]);


    return (
        <>
            {/* TOPBAR */}
            <div className="topbar py-2 bg-light position-static px-sm-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-7 col-md-6 col-lg-6 text-start">
                            <button className="btn btn-secondary rounded-0 me-2" onClick={fontIncrease}><FaPlus /></button>
                            <button className="btn btn-secondary rounded-0 me-2" onClick={fontDefault}><FaPlusMinus /></button>
                            <button className="btn btn-secondary rounded-0" onClick={fontDecrease}><FiMinus /></button>
                        </div>
                        <div className="col-5 col-md-6 col-lg-6 text-end">
                            <button className="btn btn-secondary rounded-0 me-2" onClick={addContrast}><IoMoonOutline /></button>
                            <button className="btn btn-secondary rounded-0" onClick={removeContrast}><MdOutlineWbSunny /></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* TOPBAR */}

            <header className={`navbar navbar-expand-lg sticky-top px-sm-5 py-1 ${isScrolled ? 'scroll-navbar' : ''}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="public/images/logo-main.webp" alt="" className={`${contrast === false ? 'd-block' : 'd-none'}`} />
                        <img src="public/images/logo-white.webp" alt="" className={`nextlogo ${contrast === true ? 'd-block' : ''}`} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav align-items-center">
                            <Link className={`nav-link ${active === 'Home' ? 'active' : ''}`} aria-current="page" to="/" onClick={(e) => setActive(e.target.innerText)}>Home</Link>
                            <Link className={`nav-link ${active === 'About' ? 'active' : ''}`} to="/about" onClick={(e) => setActive(e.target.innerText)}>About</Link>
                            <Link className={`nav-link ${active === 'Posts' ? 'active' : ''}`} to="/posts" onClick={(e) => setActive(e.target.innerText)}>Posts</Link>
                            <Link className={`nav-link ${active === 'Contact' ? 'active' : ''}`} to="/contact" onClick={(e) => setActive(e.target.innerText)}>Contact</Link>
                            {isAuthenticated && (
                                <li>
                                    <p> {user.name} </p>
                                </li>
                            )}
                            {isAuthenticated ? (
                                <li>
                                    <button className={`btn btn-outline-dark ms-sm-3 px-3 ${contrast === true ? 'btn-outline-light' : ''} rounded-1`}
                                        onClick={() => logout({ returnTo: window.location.origin })}>
                                        Log Out
                                    </button>
                                </li>
                            ) : (
                                <li>
                                    <button className={`btn btn-outline-dark ms-sm-3 px-3 rounded-1 ${contrast === true ? 'btn-outline-light' : ''}`} onClick={() => loginWithRedirect()}>Log In</button>
                                </li>
                            )}
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header