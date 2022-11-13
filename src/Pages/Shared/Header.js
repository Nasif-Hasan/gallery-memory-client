import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogOut = () => {
        logout()
        .then()
        .catch()
    }

    return (

        <div className="navbar bg-base-100 h-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/servicePage'>Service</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/signReview'>Your Reviews</Link></li>

                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='h-12' src={logo} alt="" />

                    <span className="ml-2 text-3xl font-bold text-gray-800">
                        Gallery Of Memory
                    </span>
                </Link>
            </div>
            <div className="navbar-end">
                <div>
                    {
                        user?.email ? <div>
                            <button className="btn text-orange-400">
                                <Link>{user?.email}</Link>
                            </button>
                            <button onClick={handleLogOut} className="btn text-gray-400">
                                <Link to='/'>Logout</Link>
                            </button>
                        </div>
                            :
                            <button className="btn text-orange-400">
                                <Link to='/login'>Login</Link>
                            </button>
                    }
                </div>



            </div>
        </div>
    );
};

export default Header;