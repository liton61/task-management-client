

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/85hnjWtD/bg.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Task Management</h1>
                        <p className="mb-5">A Task Management System is a software tool or platform designed to help individuals or teams organize, track, prioritize, and complete tasks efficiently.</p>
                        <button className="btn btn-success text-white">Let’s Explore <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;