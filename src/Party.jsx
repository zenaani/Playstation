import TopIcon from "./TopIcon"
import { LuPartyPopper } from "react-icons/lu";

const Party = () => {
    return(
        <div className="flex gap-5 m-4">
            <TopIcon Icon={LuPartyPopper}/>
            <div className="flex-col">
                <div className="text-white font-semibold text-sm">Destiny 2</div>
                <div className="text-gray font-semibold tesxt-sm">Fancy a spook?</div>
            </div>
        </div>
    )
}

export default Party