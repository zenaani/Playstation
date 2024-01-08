import LibraryGameEntity from './LibraryGameEntity';

const Library = () => {
    return(
        <div className="flex-col w-2/3 bg-backgrounds rounded-3xl px-5 py-5 backdrop-filter backdrop-blur-sm bg-opacity-30 mt-5">
            
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div>Library</div>
                    <div>Back</div>
                  </div>
                  
                  <LibraryGameEntity/>
                  <LibraryGameEntity/>
                  <LibraryGameEntity/>

                </div>

              </div>

    )
}

export default Library