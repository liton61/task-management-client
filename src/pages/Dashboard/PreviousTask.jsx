import { useContext, useEffect } from "react";
import { useState } from "react";
import TaskCard from "./TaskCard";
import { AuthContext } from "../../authentication/Provider/AuthProvider";


const PreviousTask = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/task/${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [user])
    return (
        <div>
            {/* <h1 className="text-center text-3xl mb-5 font-semibold">Previous Task</h1> */}
            {
                tasks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {tasks.map(task => (
                            <TaskCard
                                key={task._id}
                                task={task}
                                tasks={tasks}
                                setTasks={setTasks}
                            ></TaskCard>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-3xl font-bold">No Tasks Available</p>
                )
            }

        </div>
    );
};

export default PreviousTask;