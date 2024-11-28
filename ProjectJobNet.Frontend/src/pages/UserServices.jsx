import Service from "src/components/Service.jsx";
import AddButton from "src/components/AddButton.jsx";

const UserServices = () => {const services = [
    { id: 1, title: "Vacancy 1", company: "Company 1", description: "Description 1" },
    { id: 2, title: "Vacancy 2", company: "Company 2", description: "Description 2" },
];

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",  // Centers the items horizontally
        gap: "20px",           // Adds space between the items
        padding: "20px",       // Adds padding around the container
    };

    return (
        <div style={containerStyle}>
            {services.map((service) => (
                <Service key={service.id} id={service.id} title={service.title} company={service.company} description={service.description} />
            ))}
            <AddButton/>
        </div>
    );
};

export default UserServices;
