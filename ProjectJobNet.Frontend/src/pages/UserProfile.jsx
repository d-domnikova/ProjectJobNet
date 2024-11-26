import CVIcon from "src/icons/CVIcon.jsx";
import ServiceIcon from "src/icons/ServiceIcon.jsx";
import HeartOutline from "src/icons/HeartOutline.jsx";
import UserInfoIcon from "src/icons/UserInfoIcon.jsx";
import BlogIcon from "src/icons/BlogIcon.jsx";
import Quit from "src/icons/Quit.jsx";

const UserProfile = () => {
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '6%',
        margin: '0 6%',
    };

    const cellStyle = {
        backgroundColor: '#FFFFFF',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        fontSize: '18px',
        fontWeight: '500',
        gap: '15px',
        height: '120px'
    };

    const items = [
        { text: 'Мої резюме', icon: <CVIcon/> },
        { text: 'Мої послуги', icon: <ServiceIcon/> },
        { text: 'Збережені вакансії', icon: <HeartOutline width={50} height={50}/> },
        { text: 'Особисті дані', icon: <UserInfoIcon/> },
        { text: 'Блог', icon: <BlogIcon/> },
        { text: 'Вийти', icon: <Quit/> },
    ];

    return (
        <div style={containerStyle}>
            {items.map((item, index) => (
                <div key={index} style={cellStyle}>
                    {item.icon}
                    {item.text}
                </div>
            ))}
        </div>
    );
};


export default UserProfile;
