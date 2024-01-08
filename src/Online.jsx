import TopIcon from "./TopIcon"
import { FaDiscord } from "react-icons/fa";

const Online = () => {
    return(
        <div className="flex gap-5 m-4">
            <TopIcon Icon={FaDiscord}/>
            <div className="flex-col">
                <div className="text-white font-semibold text-sm">Hooligan</div>
                <div className="text-gray font-semibold text-sm">Playing Rocket League</div>
            </div>
        </div>
    )
}

export default Online