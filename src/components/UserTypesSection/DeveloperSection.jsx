import developer from '../../assets/developer.jpg'
const DeveloperSection = () => {
    return (
        <section className="p-6 lg:w-3/4 mx-auto my-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-10 mb-6 lg:mb-0">
                    <img
                        src={developer}
                        alt="Developer"
                        className="rounded-lg"
                    />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Developers</h2>
                    <p className="text-xl text-gray-700 text-justify">
                        For developers seeking resources, tutorials, and tools.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus at condimentum mauris, sit amet maximus turpis.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DeveloperSection;
