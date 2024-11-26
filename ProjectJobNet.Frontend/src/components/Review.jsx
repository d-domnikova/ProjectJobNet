import StarFilled from "src/icons/StarFilled.jsx";
import Report from "src/icons/Report.jsx";
import StarHalved from "src/icons/StarHalved.jsx";
import StarEmpty from "src/icons/StarEmpty.jsx";

const Review = ({ avatar, name, comment, rating}) => {
    const containerStyle = {
        backgroundColor: '#FFFFFF',
        borderRadius: '15px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px', // Optional for limiting width
    };

    const starsContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        marginTop: '5px',
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const avatarStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#D9D9D9', // Placeholder color for the avatar
        flexShrink: 0,
    };

    const nameStyle = {
        fontSize: '18px',
        fontWeight: 500,
        color: '#000000',
        marginLeft: '15px',
    };

    const reportStyle = {
        display: 'flex',
        alignItems: 'right',
        fontSize: '13px',
        fontWeight: 400,
        color: '#FF4747',
        cursor: 'pointer',
        gap: '5px',
    };

    const bodyStyle = {
        fontSize: '16px',
        fontWeight: 400,
        textAlign:'left',
        color: '#6F6F6F',
        lineHeight: '1.5',
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={avatarStyle}></div>
                    <span style={nameStyle}>{name}</span>
                </div>
                <span style={reportStyle}>
                    Report
                    <Report/>
                </span>

            </div>
            <div style={starsContainerStyle}>{renderStars(rating)}</div>
            <div style={bodyStyle}>{comment}</div>
        </div>
    );
};

export default Review;

const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (rating >= i + 1) {
            stars.push(<StarFilled key={i} />);
        } else if (rating > i) {
            stars.push(<StarHalved key={i}/>);
        } else {
            stars.push(<StarEmpty key={i} />);
        }
    }
    return stars;
};

Review.defaultProps = {
    avatar: '', // Default empty avatar placeholder
    username: 'Name Surname',
    rating: 2.5, // Default no stars
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. Etiam imperdiet libero sed felis tempus scelerisque eget et urna. Vivamus fermentum tortor lorem, id luctus mauris volutpat efficitur. ', // Placeholder text
};