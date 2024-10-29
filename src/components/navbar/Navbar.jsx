//Navbar.jsx
import "./Navbar.css"
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../components/buttons/login-button";
import { LogoutButton } from "../../components/buttons/logout-button";
import { SignupButton } from "../../components/buttons/signup-button";

const Navbar = () => {
    const { isAuthenticated } = useAuth0();
    console.log("Is authenticated:", isAuthenticated); // Add this line for debugging


  return (
    <div className="flex justify-between border-b-2 align-middle py-3">
        <Link to="/">
            <img src="/src/book.png" width={30} alt="Book Icon" />
        </Link>
        <div className="flex gap-3">
            <div className='about'>
                <Link to="/about">About</Link>
            </div>
            <div className='blog'>
                <Link to="/blog">Blog</Link>
            </div>
            <div className='newsletter'>
                <Link to="/newsletter">Newsletter</Link>
            </div>
            {!isAuthenticated && (
                <>
                <SignupButton />
                <LoginButton />
                </>
            )}
            {isAuthenticated && (
                <>
                <LogoutButton />
                </>
            )}
        </div>
    </div>
  )
}

export default Navbar
