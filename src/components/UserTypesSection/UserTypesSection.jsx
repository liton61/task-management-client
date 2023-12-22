

const UserTypesSection = () => {
    const userTypes = [
        {
            title: 'Developers',
            description: 'For developers seeking resources, tutorials, and tools.',
        },
        {
            title: 'Corporate Professionals',
            description: 'Tailored for corporate professionals looking for management solutions.',
        },
        {
            title: 'Bankers',
            description: 'Ideal for banking professionals seeking financial analysis and updates.',
        },
        // Add more user types as needed
    ];

    return (
        <section className="p-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-6">Who Can Benefit?</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {userTypes.map((user, index) => (
                    <div key={index} className="p-6 border rounded-lg bg-white shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{user.title}</h3>
                        <p className="text-gray-600">{user.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UserTypesSection;
