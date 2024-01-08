import Horizon from './assets/horizon.webp'
import Mirage from './assets/mirage.png'
import Cyberpunk from './assets/cyberpunk.jpg'
import Watchdogs from './assets/watchdogs.jpg'

const MostPlayed = () => {
    return(
        <div>
            <div className="flex w-full mt-5 justify-between items-center">
              <div>Most Played Games</div>
              <div className="flex items-center gap-2">
                
                <div className="h-[1px] w-16 bg-white"></div>
                <div className="h-[1px] w-6 bg-white"></div>
                <div className="h-[1px] w-6 bg-white"></div>
              </div>
            </div>

            <div className="flex w-full mt-5 gap-4">
              <div className="flex-col h-full w-1/3">
                <img src={Mirage} alt='mirage' className="group h-36 w-full object-cover rounded-3xl opacity-80 hover:opacity-100 transition-opacity duration-500 "></img>
                <div className="mt-2 text-white font-semibold">Assassin's Creed Mirage</div> 
                <div className="text-white font-semibold">72 hrs</div> 
              </div>

              <div className="flex-col h-full w-1/3">
                <img src={Cyberpunk} alt='cyberpunk' className="h-36 w-full object-cover rounded-3xl opacity-80 hover:opacity-100 transition-opacity duration-500 "></img>
                <div className="mt-2 text-white font-semibold">CyberPunk 2077</div> 
                <div className="text-white font-semibold">12 hrs</div> 
              </div>

              <div className="flex-col h-full w-1/3">
                <img src={Watchdogs} alt='watchdogs' className="h-36 w-full object-cover rounded-3xl opacity-80 hover:opacity-100 transition-opacity duration-500 "></img>
                <div className="mt-2 text-white font-semibold">Watch Dogs 2</div> 
                <div className="text-white font-semibold">16 hrs</div> 
              </div>

            </div>
        </div>
        
    )
}

export default MostPlayed