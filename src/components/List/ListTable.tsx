import useTodoStore, { TaskStatus, TaskCategory } from '../../store/store';

const ListTable = ({ title }: { title: string }) => {
    const { tasks, deleteTask } = useTodoStore();

    // Determine the correct status
    const status =
        title === 'Todo' ? TaskStatus.TODO :
            title === 'In Progress' ? TaskStatus.IN_PROGRESS :
                TaskStatus.COMPLETED;

    // Filter tasks
    const filteredTasks = tasks.filter(task => task.status === status);

    let colorClass = 'bg-purple-200';
    if (title === 'In Progress') colorClass = 'bg-blue-200';
    else if (title === 'Done') colorClass = 'bg-green-200';

    return (
        <div className='w-full mx-5 h-auto bg-neutral-100 rounded-xl p-4'>
            <div className={`${colorClass} px-8 py-2 rounded-lg font-bold`}>
                {title}
            </div>

            {/* Task List */}
            <div className='px-8 py-3'>
                {filteredTasks.length === 0 ? (
                    <p className='text-gray-500'>No tasks yet.</p>
                ) : (
                    <table className='w-full table-auto'>

                        <thead>
                            <tr className='text-center'>
                                <th className='px-4 py-2'>Task Name</th>
                                <th className='px-4 py-2'>Due On</th>
                                <th className='px-4 py-2'>Task Status</th>
                                <th className='px-4 py-2'>Task Category</th>
                                <th className='px-4 py-2'>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredTasks.map(task => (
                                <tr className='text-center rounded-xl' key={task.id}>
                                    <td className='px-4 py-2'>{task.title}</td>
                                    <td className='px-4 py-2'>{task.dueDate.toISOString().split('T')[0]}</td>
                                    <td className='px-4 py-2'>{task.status}</td>
                                    <td className='px-4 py-2'>{task.category}</td>
                                    <td className='px-4 py-2'>
                                        <button
                                            onClick={() => deleteTask(task.id)}
                                            className='bg-red-400 cursor-pointer text-white px-2 py-1 rounded-md'
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ListTable;
