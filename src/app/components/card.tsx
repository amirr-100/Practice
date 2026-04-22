export const Card = ({children}: {children: React.ReactNode}) => {
    const cardStyle = {
        padding: "100px",
        margin: "10px",
        boxshadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
    };
    return<div style={cardStyle}>{children}</div>

};