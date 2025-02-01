import { useState } from 'react';
import Header from '../Header'
import ListTable from './ListTable'
import TaskModal from './TaskModal.tsx';


const ListView = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <div className=''>
            <Header />
            <div className='flex justify-self-end mr-10 items-center py-5'>
                <button onClick={() => setIsModalOpen(true)} className='bg-purple-900 text-white font-thin p-2 rounded-full px-5 cursor-pointer'>Add Task</button>
            </div>
            <div className='h-screen w-screen mt-1.5 flex flex-col gap-5'>
                <ListTable title={"Todo"} />
                <ListTable title={"In Progress"} />
                <ListTable title={"Done"} />
            </div>

            {/* Task Modal */}
            {isModalOpen && <TaskModal closeModal={() => setIsModalOpen(false)} />}
        </div>
    )
}

export default ListView