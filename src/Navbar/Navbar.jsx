

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="flex items-center justify-between">
                    <div className="text-white">
                        <a href="#" className="text-lg font-semibold">Logo</a>
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="text-white hover:text-gray-300">Home</a>
                        <a href="#" className="text-white hover:text-gray-300">Services</a>
                        <a href="#" className="text-white hover:text-gray-300">About</a>
                        <a href="#" className="text-white hover:text-gray-300">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;