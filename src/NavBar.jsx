import NavIcon from './NavIcon';
import { FaPlaystation, FaShoppingBag } from "react-icons/fa";
import { FaHouse, FaCamera } from "react-icons/fa6";
import { GiPieChart } from "react-icons/gi";
import { IoPeople, IoNotifications } from "react-icons/io5";
import Peter from './assets/peter.png'

const NavBar = () => {
    const iconStyle = { color: "white", fontSize: "2em" }

    return(
        <div className="flex flex-col h-screen w-36 gap-16 items-center bg-background fixed">
        <div className="m-10">
          <FaPlaystation style={iconStyle}></FaPlaystation>
        </div>
        
        <div className=" place-self-center">
          <NavIcon Icon={FaHouse} isSelected={true}/>
          <NavIcon Icon={FaShoppingBag} isSelected={false}/>
          <NavIcon Icon={FaCamera} isSelected={false}/>
          <NavIcon Icon={GiPieChart} isSelected={false}/>  
          <NavIcon Icon={IoPeople} isSelected={false}/>
        </div>

      </div>
    )
}

export default NavBar