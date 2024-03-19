import { Outlet, Link } from "react-router-dom";

const Nav = () => {

  
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>                    
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/parent">Parent</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav;