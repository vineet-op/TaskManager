import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../auth/config';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {


    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <div className='w-full pt-[58px]'>
            <div className='w-full flex justify-between items-center px-8 mb-8'>
                <h2 className='font-semibold text-xl'>TaskBuddy</h2>
                <img src='' alt='imge' />
            </div>
            <div className='w-full flex px-8 justify-between'>
                <div className='flex gap-5'>
                    <Link to={'/create'}>
                        <button className='font-semibold text-base cursor-pointer'>List</button>
                    </Link>
                    <Link to={'/kb'}>
                        <button className='font-semibold text-base cursor-pointer'>Board</button>
                    </Link>
                </div>
                <div>
                    <button onClick={handleLogout} className='bg-neutral-200 px-6 py-2 rounded-lg cursor-pointer'>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Header