import { FaPlaystation } from "react-icons/fa";

const NavIcon = ({ Icon, isSelected }) => {
    const iconStyle = { color: "white", fontSize: "1.5em" }
    const hah = isSelected ? "bg-white" : "bg-blue"
    return(
        <div className={`bg-${isSelected ? "blue" : "background"} p-3 rounded-lg m-5  shadow-${isSelected ? "blue" : "background"}  hover:bg-blue shadow-[0_0px_30px_rgb(0,0,0,0.2)] hover:shadow-blue transition-all duration-500`}>
            {Icon && <Icon style={iconStyle} />}
        </div>
    )
}

export default NavIcon