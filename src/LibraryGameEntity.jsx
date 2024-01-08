const LibraryGameEntity = () => {
    return(
        <div className="flex w-full mt-4 justify-between items-center">
                    <div className="inline-flex items-center gap-2">
                      <div className="h-10 w-10 bg-white rounded-xl"></div>
                      <div className="flex-col">
                        <div className=" text-base">Cyberpunk</div>
                        <div className=" text-xs text-gray font-bold">PS4 & PS5</div>
                      </div>
                    </div>
                    
                    <div className="flex-col">
                      <div className=" text-xs text-gray font-bold">12 Dec</div>
                      <div className=" text-xs text-gray font-semibold">2020</div>
                    </div>

                    <div className="text-blue px-3 py-1 rounded-lg border-2 border-blue text-sm hover:bg-blue hover:text-white transition-all duration-500">Downloaded</div>

                  </div>
        
    )
}

export default LibraryGameEntity