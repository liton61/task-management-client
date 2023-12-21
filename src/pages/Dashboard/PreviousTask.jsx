import { useEffect } from "react";
import { useState } from "react";


const PreviousTask = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            <h1>Previous Task</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {
                    tasks.map(task => <div key={task._id} className="card lg:w-80 md:w-80 w-full mr-10 bg-neutral text-neutral-content mb-16 mx-auto">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{task.title}</h2>
                            <p>{task.description}</p>
                            <p>{task.deadline}</p>
                            <p>{task.priority}</p>
                            <div className="card-actions justify-end">
                                <button className="btn text-yellow-600"><i className="fa-solid fa-pen-to-square"></i></button>
                                <button className="btn text-red-600"><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PreviousTask;