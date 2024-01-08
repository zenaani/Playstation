import Online from "./Online"
import Party from "./Party"
import { FaChevronDown } from "react-icons/fa6";

const Social = () => {
    return(

        <div className="flex-col w-full bg-backgrounds rounded-3xl px-5 py-5 backdrop-filter backdrop-blur-sm bg-opacity-50">
              
              <div className="flex justify-between items-center">
                <div className="text-gray font-bold">Social</div>
                <FaChevronDown style={{color: "gray"}}/>
              </div>

              <div className="flex justify-between items-center bg-gray rounded-2xl p-5 m-5 backdrop-filter backdrop-blur-sm bg-opacity-30">
                <div className="flex-col leading-none">
                  <div className="font-semibold text-white text-sm">Rocket League Update</div>
                  <div className="font-semibold text-gray  text-sm">12 min remaining</div>
                </div>
                <div className="flex justify-center items-center h-8 w-8 border-green border-t-transparent border-b-2 border-l-2 rounded-full text-[10px] text-white shadow-[0_0px_25px_rgb(0,0,0,0.2)] shadow-green">35%</div>
              </div>

              <div className="text-gray font-bold">Online - 3</div>

              <Online/>
              <Online/>
              <Online/>

              <div className="text-gray font-bold">Parties - 3</div>

              <Party/>
              <Party/>
              <Party/>
            
            
            </div>
        
    )
}

export default Social