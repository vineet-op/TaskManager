import React, { useState } from 'react';
import useTodoStore, { TaskCategory, TaskStatus } from '../../store/store';

const TaskModal = ({ closeModal }: { closeModal: () => void }) => {
    const { addTask } = useTodoStore();

    // State for task input
    const [task, setTask] = useState({
        title: '',
        description: '',
        category: TaskCategory.WORK,
        dueDate: new Date(),
        status: TaskStatus.TODO,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleAddTask = () => {
        if (!task.title.trim()) return;
        addTask(task);
        closeModal();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Add Task</h2>

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={task.title}
                    onChange={handleChange}
                    className="border rounded p-2 w-full mb-2"
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={task.description}
                    onChange={handleChange}
                    className="border rounded p-2 w-full mb-2"
                />

                {/* Category Selection */}
                <select
                    name="category"
                    value={task.category}
                    onChange={handleChange}
                    className="border rounded p-2 w-full mb-2"
                >
                    <option value={TaskCategory.WORK}>Work</option>
                    <option value={TaskCategory.PERSONAL}>Personal</option>
                </select>

                {/* Status Selection */}
                <select
                    name="status"
                    value={task.status}
                    onChange={handleChange}
                    className="border rounded p-2 w-full mb-2"
                >
                    <option value={TaskStatus.TODO}>Todo</option>
                    <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
                    <option value={TaskStatus.COMPLETED}>Completed</option>
                </select>

                {/* Due Date */}
                <input
                    type="date"
                    name="dueDate"
                    value={task.dueDate.toISOString().split('T')[0]}
                    onChange={(e) => setTask({ ...task, dueDate: new Date(e.target.value) })}
                    className="border rounded p-2 w-full mb-2"
                />

                {/* Buttons */}
                <div className="flex justify-end gap-2">
                    <button
                        onClick={closeModal}
                        className="bg-gray-400 text-white px-4 py-2 rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAddTask}
                        className="bg-purple-600 text-white px-4 py-2 rounded-md"
                    >
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
