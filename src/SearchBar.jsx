import TopIcon from './TopIcon';
import { IoNotifications } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";


const SearchBar = () => {
    return (
        <div className="flex justify-between">
          <input type="search" placeholder="search" className=" w-96  px-16 rounded-2xl bg-search text-white outline-none placeholder-white" ></input>
          <div className="flex gap-5">
            <TopIcon Icon={IoNotifications}/>
            <TopIcon Icon={FaCartShopping}/>
            <TopIcon Icon={GoPerson}/>
          </div>
        </div> 
    )
}

export default SearchBar