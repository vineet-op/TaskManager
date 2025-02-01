import useTodoStore, { TaskStatus } from '../../store/store';

const Columns = ({ title }: { title: string }) => {
    const { tasks } = useTodoStore();

    // Filter tasks based on status
    const status = title === 'Todo' ? TaskStatus.TODO : title === 'In Progress' ? TaskStatus.IN_PROGRESS : TaskStatus.COMPLETED;
    const filteredTasks = tasks.filter(task => task.status === status);

    return (
        <div className='mx-10 bg-neutral-200 w-[336px] h-[500px] items-center rounded-lg px-3 flex flex-col gap-5'>
            <div className='pt-2 bg-purple-300 text-black p-3 rounded-lg'>{title}</div>

            {/* Render each task in a separate div */}
            {filteredTasks.map(task => (
                <div key={task.id} className='bg-white text-center flex flex-col justify-between rounded-lg w-[312px] h-[110px] mt-5 px-3 shadow-md'>

                    <div className='flex justify-between items-center'>
                        <h3 className="text-lg font-semibold text-gray-600">{task.title}</h3>
                        <p className="text-sm font-bold text-gray-600">...</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <h3 className="text-base font-base">{task.category}</h3>
                        <p className="text-base text-gray-600">{task.dueDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Columns;
