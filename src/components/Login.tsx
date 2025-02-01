import React, { useEffect, useState } from 'react'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from '../auth/config'
import ListView from './List/ListView'

const Login = () => {

    const [value, setValue] = useState<any>('')

    const HandleSubmit = () => {
        signInWithPopup(auth, provider).then((data) => {
            if (data && data.user && data.user.email) {
                setValue(data.user.email)
                localStorage.setItem("email", data.user.email)

                console.log(data.user);

            }
        })
    }


    useEffect(() => {
        setValue(localStorage.getItem('email'))
    }, [])

    return (
        <div className='h-screen w-screen bg-white'>
            {value ?
                <ListView /> : (
                    <div className='flex flex-row justify-between items-center h-full w-full'>
                        {/* //left side of the page */}
                        <div className='flex gap-4 flex-col  mx-auto flex-wrap w-[400px] h-[200px]'>
                            <h2 className='text-xl font-bold text-purple-900'>TaskBuddy</h2>
                            <p className='font-semibold font-sans'>Streamline your workflow and track progress effortlessly with our all-in-one task management app.</p>
                            <button onClick={HandleSubmit} className=' mt-5 cursor-pointer w-64 bg-gray-950 text-white font-semibold font-sans px-6 py-3 rounded-lg'>Continue with Google</button>
                        </div>

                        {/* Right side of the page */}
                        <div className='flex h-full'>
                            <div className=''>
                                <img src='./public/circles_bg.png' />
                            </div>
                            <div className='absolute right-0 bottom-6'>
                                <img src='./public/task.png' />
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Login