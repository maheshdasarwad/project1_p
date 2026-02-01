import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import {ToastContainer} from 'react-toastify'


const Header = () => {

    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('user loggedout');
        setTimeout(()=> {
            navigate('/login');
        }, 1000)
    }

    return (
        <header style={{ fontFamily: 'Conthrax', fontWeight: 600 }} className="w-full text-white px-6 py-1 h-12">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className='flex items-center justify-between'>
                    <img src="/logo2.png" alt="Logo" className="h-20" />
                    <h1 className='text-[#5F5F5F] font-bold text-5xl'>CarsForum</h1>
                </div>
                
                {/* User Section */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleLogout}
                        className="cursor-pointer bg-gray-200 hover:bg-gray-500 transition text-black font-bold px-6 py-3 uppercase rounded-full tracking-widest text-xl-1"
                    >
                        Logout
                    </button>

                    <div className="border w-11 h-11 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-lg uppercase">
                    {loggedInUser?.charAt(0)}
                    </div>
        
                </div>
            </div>
            <ToastContainer />
        </header>
    )
}

export default Header;