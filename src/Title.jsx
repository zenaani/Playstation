import Miles from './assets/miles.webp'


const Title = () => {
    return(
        <div className="flex-col w-full bg-backgrounds rounded-3xl px-5 py-5 backdrop-filter backdrop-blur-xl bg-opacity-50">
            
              <img src={Miles} alt='miles' className="h-80 absolute right-16 top-[-50px] z-10 hover:scale-125 transition-all duration-1000"></img>
              <div className="h-20 w-20 rounded-full absolute right-60 bg-yellow shadow-[0_0px_100px_rgb(0,0,0,0.2)] shadow-blue"></div>
              <div className="h-20 w-20 rounded-full absolute right-60 bg-yellow shadow-[-150px_20px_100px_rgb(0,0,0,0.2)] shadow-red "></div>

              <div className="inline-block text-white bg-red rounded-lg p-1 mt-12">New</div>
              
              <div className="text-white mt-2 text-5xl">Marvel's Spider-Man:</div>
              <div className="text-white mt-2 text-5xl">Miles Morales</div>
              

              <div className=" inline-flex h-16 mt-5 bg-backgrounds rounded-2xl p-1 backdrop-filter backdrop-blur-sm bg-opacity-100">
                <div className="flex h-full w-1/2 text-white justify-center items-center px-4">
                  Rs.4999
                </div>
                <div className="flex h-full w-1/2 bg-blue text-white rounded-2xl justify-center items-center px-4 shadow-[0_0px_100px_rgb(0,0,0,0.2)] shadow-blue hover:shadow-[0_0px_30px_rgb(0,0,0,0.2)] hover:shadow-blue transition-all duration-500">
                  Purchase
                </div>
            </div>
              
        </div>
        
    )
}

export default Title