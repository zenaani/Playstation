import Skull from './assets/skull.png'

const Accessories = () => {
    return(
        <div className="flex flex-col w-1/3 bg-backgrounds rounded-3xl px-5 py-5 backdrop-filter backdrop-blur-sm bg-opacity-50 mt-5" >
            
                <div className="flex flex-col h-full items-center">
                  <div className="flex w-full justify-between">
                    <div>Accessories</div>
                    <div>Back</div>
                  </div>
                  <img src={Skull} alt="skull" className=" h-36 mt-5 self-center hover:h-40 transition-all duration-1000"></img>
                </div>
            
      </div>
        
    )
}

export default Accessories