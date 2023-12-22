import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateTask = () => {
    const data = useLoaderData();
    const { _id, title, deadline, priority, description } = data;
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const description = form.description.value;
        const formInfo = { title, deadline, priority, description };
        console.log(formInfo);
        form.reset();
        fetch(`http://localhost:5000/task/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Task successfully added !",
                        icon: "success"
                    });
                    form.reset();
                }
            })
    };
    return (
        <div>
            {/* <h1>Update Task</h1> */}
            <div>
                <form onSubmit={handleSubmit} className="w-full lg:w-3/4 mx-auto">
                    <div className="mb-4">
                        <label htmlFor="title" className="text-gray-700 text-sm font-medium mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter task title"
                            defaultValue={title}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="deadline" className="text-gray-700 text-sm font-medium mb-2">
                            Deadline
                        </label>
                        <input
                            type="date"
                            id="deadline"
                            defaultValue={deadline}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="priority" className="text-gray-700 text-sm font-medium mb-2">
                            Priority
                        </label>
                        <select
                            id="priority"
                            defaultValue={priority}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="text-gray-700 text-sm font-medium mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="Enter task description"
                            defaultValue={description}
                            className="appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <Link >
                            <button
                                className="btn btn-success w-full text-white"
                            >
                                Update Task
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;