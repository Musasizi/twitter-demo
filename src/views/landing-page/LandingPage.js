import GroupName from "../../components/group-name/GroupName"
export default function LandingPaging() {

    const groupNames = [
        { name: "CODE CRUSADERS", color: "#bd1e7d" },
        { name: "CODE MAESTROS", color: "#26d124" },
        { name: "GROUP X", color: "#de551f" },
        { name: "PIXEL KNIGHTS", color: "#4329f0" },
    ];

    return (
        <div>
            {
                groupNames.map((item, key) => {
                    return <GroupName key={key + 1} name={item.name} color={item.color} />
                })
            }


        </div>
    )
}