import { FaPlaystation } from "react-icons/fa";


const TopIcon = ({ Icon }) => {
    const iconStyle = { color: "white", fontSize: "1.5em" }

    return(
        <div className="bg-search p-3 rounded-2xl">
            {Icon && <Icon style={iconStyle} />}
        </div>
    )
}

export default TopIcon