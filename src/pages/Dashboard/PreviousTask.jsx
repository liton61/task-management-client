import { useEffect } from "react";
import { useState } from "react";
import TaskCard from "./TaskCard";


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
                    tasks.map(task => <TaskCard key={task._id} task={task}
                        tasks={tasks}
                        setTasks={setTasks}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default PreviousTask;