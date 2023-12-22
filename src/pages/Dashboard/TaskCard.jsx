/* eslint-disable react/prop-types */

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
                                'Your file has been deleted.',
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
            <div className="card w-96 bg-neutral text-neutral-content mb-1">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{priority}</p>
                    <p>{deadline}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn"><i className="fa-solid fa-trash-can text-red-600"></i></button>
                        <button className="btn"><i className="fa-solid fa-pen-to-square text-green-600"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;