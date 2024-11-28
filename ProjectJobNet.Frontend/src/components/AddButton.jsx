const AddButton = ({ width = "50%", height = "300px", onClick }) => {
    const buttonStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: width, // Use the passed or default width
        height: height, // Use the passed or default height
        margin: "0 auto",
        backgroundColor: "#FFFFFF",
        borderRadius: "30px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        border: "none",
    };

    const circleStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100px",
        height: "100px",
        backgroundColor: "#E7F2FE",
        border: "2px solid #75BBF5",
        borderRadius: "50%",
    };

    const plusStyle = {
        height: "70px",
        fontSize: "40px",
        fontWeight: "bold",
        color: "#75BBF5",
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            <div style={circleStyle}>
                <span style={plusStyle}>+</span>
            </div>
        </button>
    );
};

AddButton.defaultProps = {
    onClick: () => alert("Button clicked!"),
};

export default AddButton;
