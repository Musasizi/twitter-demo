function GroupName(props) {
    return (
        <div
            style={{
                fontFamily: "sans-serif",
                color: props.color,
                border: "1px solid",
                width: "50%",
                paddingLeft: "5%"
            }}>
            <h5> {props.name}</h5>
        </div>
    );
}

export default GroupName;