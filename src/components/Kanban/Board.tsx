import React, { useState } from 'react'
import Header from '../Header'
import Columns from './Columns.tsx';
import TaskModal from '../List/TaskModal.tsx.tsx';

const Board = () => {

    const [isOpen, SetisOpen] = useState(false)

    return (
        <>
            <div className=''>
                <Header />
                <div className='flex justify-self-end mr-10 items-center py-5'>
                    <button onClick={() => SetisOpen(!isOpen)}>Addtask</button>
                </div>
                <div className='h-screen w-screen mt-1.5 flex justify-center gap-5'>
                    <Columns title={"Todo"} />
                    <Columns title={"In Progress"} />
                    <Columns title={"Done"} />
                </div>
                {isOpen && <TaskModal closeModal={() => SetisOpen(false)} />}
            </div>
        </>
    )


}

export default Board