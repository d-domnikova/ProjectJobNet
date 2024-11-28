import Vacancy from "src/components/Vacancy.jsx";


const SavedVacancies = () => {const vacancies = [
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
            {vacancies.map((vacancy) => (
                <Vacancy key={vacancy.id} id={vacancy.id} title={vacancy.title} company={vacancy.company} description={vacancy.description} />
            ))}
        </div>
    );
};

export default SavedVacancies;
