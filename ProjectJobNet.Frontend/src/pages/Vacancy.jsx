import PropTypes from 'prop-types';
import Report from "src/icons/Report.jsx";
import HeartOutline from "src/icons/HeartOutline.jsx";


const Vacancy = ({
                         companyLogo,
                         companyName,
                         jobTitle,
                         salary,
                         jobDescription,
                         tags,
                         onDetailsClick,
                         companyDescription
                     }) => {
    const containerStyle = {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '5%'
    };

    const vacancyStyle = {
        backgroundColor: '#FFFFFF',
        width: '50%',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '30px',
    };

    const reportIconStyle = {
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        float: 'right'
    };

    const headerStyle = {
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
    };

    const logoStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '5px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const detailsStyle = {
        marginBottom: '20px',
    };

    const tagsContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '20px',
    };

    const tagStyle = {
        backgroundColor: '#E0E0E0',
        padding: '5px 10px',
        borderRadius: '15px',
        fontSize: '14px',
    };

    const descriptionContainerStyle = {
        marginBottom: '30px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '15px',
        cursor: 'pointer',
        marginRight: '10px',
        border: 'solid 3px #75BBF5',
    };

    const saveTextStyle = {
        marginLeft: '40px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: '500',
        gap: '10px'
    };

    const companySectionStyle = {
        backgroundColor: '#FFFFFF',
        width: '50%',
        height: '20%',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    };

    const companyHeaderStyle = {
        fontSize: '22px',
        fontWeight: '600',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
    };

    return (
        <div style={containerStyle}>
            {/* Vacancy Section */}
            <div style={vacancyStyle}>
                <div style={reportIconStyle}>
                    <Report />
                </div>
                <div style={headerStyle}>
                    <h2>{jobTitle}</h2>
                    <div
                        style={{
                            ...logoStyle,
                            backgroundImage: `url(${companyLogo})`,
                        }}
                    ></div>
                </div>
                <div style={detailsStyle}>
                    <p><strong>Salary:</strong> {salary}</p>
                    <p><strong>Company:</strong> {companyName}</p>
                </div>
                <div style={tagsContainerStyle}>
                    {tags.map((tag, index) => (
                        <span key={index} style={tagStyle}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div style={descriptionContainerStyle}>
                    <h3>Vacancy Description</h3>
                    <p>{jobDescription}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button style={{...buttonStyle, ...{backgroundColor:'#75BBF5'}}}>Apply</button>
                    <div style={saveTextStyle}>
                        <span>Save</span>
                        <HeartOutline color="#000000"/>
                    </div>
                </div>
            </div>

            {/* Company Section */}
            <div style={companySectionStyle}>
                <div style={companyHeaderStyle}>
                    <h3>{companyName}</h3>
                    <button style={{ ...buttonStyle}} onClick={onDetailsClick}>
                        Детальніше >
                    </button>
                </div>
                <p>{companyDescription}</p>
            </div>
        </div>
    );
};

Vacancy.propTypes = {
    companyLogo: PropTypes.string,
    companyName: PropTypes.string,
    jobTitle: PropTypes.string,
    salary: PropTypes.string,
    jobDescription: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    onReport: PropTypes.func,
    onSave: PropTypes.func,
    onDetailsClick: PropTypes.func,
    companyDescription: PropTypes.string,
};

Vacancy.defaultProps = {
    companyLogo: 'https://via.placeholder.com/50',
    companyName: 'Company Name',
    jobTitle: 'Job Title',
    salary: '$100,000/year',
    jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. Etiam imperdiet libero sed felis tempus scelerisque eget et urna. Vivamus fermentum tortor lorem, id luctus mauris volutpat efficitur. In finibus lectus vitae velit vulputate blandit. Nunc in consectetur magna. Vestibulum vitae lacus et felis euismod efficitur ut nec tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed dictum at dolor ut egestas.\n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. \n' +
        '\n' +
        'Etiam imperdiet libero sed felis tempus scelerisque eget et urna. Vivamus fermentum tortor lorem, id luctus mauris volutpat efficitur. In finibus lectus vitae velit vulputate blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed dictum at dolor ut egestas.\n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5', 'Tag6'],
    onSave: () => alert('Saved!'),
    onDetailsClick: () => alert('View Company Details'),
    companyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. Etiam imperdiet libero sed felis tempus scelerisque eget et urna. ',
};

export default Vacancy;
