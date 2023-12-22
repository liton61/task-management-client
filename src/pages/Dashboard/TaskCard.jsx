/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const TaskCard = ({ task, tasks, setTasks }) => {
    const { _id, title, deadline, description, priority } = task;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/task/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Task has been deleted.',
                                'success'
                            )
                            const remaining = tasks.filter(del => del._id !== _id);
                            console.log(remaining)
                            setTasks(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="card w-80 mr-14 md:w-80 md:mx-3 md:mr-14 mb-5 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>Priority :  {priority}</p>
                    <p>Deadline : {deadline}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn"><i className="fa-solid fa-trash-can text-red-600"></i></button>
                        <Link to={`/dashboard/updateTask/${_id}`}>
                            <button className="btn"><i className="fa-solid fa-pen-to-square text-green-600"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;