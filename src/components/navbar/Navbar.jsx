import "./Navbar.css"
import {Link} from 'react-router-dom';
import test from "../../../public/book.png"

const Navbar = () => {

  return (
    <div className="flex justify-between border-b-2 align-middle py-3">
        <Link to="/">
            <img src="../../../public/book.png" width={30} alt="Book Icon" />
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
        </div>
    </div>
  )
}

export default Navbar
