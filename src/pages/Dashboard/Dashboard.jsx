import { useContext } from "react";
import { AuthContext } from "../../authentication/Provider/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-start">
                    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
                    <div className="lg:w-3/4 mx-auto mt-24">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-success text-base-content">
                        {
                            user &&
                            <div className="mx-auto mb-10">
                                <img className="w-24 rounded-full" alt="" src={user?.photoURL} />
                            </div>

                        }
                        {/* <li className="mb-3 font-medium"><NavLink to="/dashboard"><i className="fa-solid fa-bars"></i> Dashboard</NavLink></li> */}
                        <li className="mb-3 font-medium"><NavLink to="/dashboard/addNewTask"><i className="fa-solid fa-plus"></i> Add new Task</NavLink></li>
                        <li className="font-medium"><NavLink to="/dashboard/previousTask"><i className="fa-solid fa-backward"></i> Previous Task</NavLink></li>
                        <div className="divider font-medium">OR</div>
                        <li className="font-medium"><NavLink to="/"><i className="fa-solid fa-house"></i>Home</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;