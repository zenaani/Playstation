import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { FaPlaystation } from "react-icons/fa";
import NavIcon from './NavIcon';
import TopIcon from './TopIcon';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Title from './Title';
import MostPlayed from './MostPlayed';
import LibraryGameEntity from './LibraryGameEntity';
import Library from './Library';
import Accessories from './Accessories';
import Online from './Online';
import Party from './Party';
import Social from './Social';

function App() {
  const iconStyle = { color: "white", fontSize: "2em" }

  return (
    <div className="flex">

      <NavBar/>
      
      <div className="flex-col w-screen bg-background p-5 ml-36">
        
        <SearchBar/>

        <div className="flex w-full gap-10">

          {/*First Main Column*/}
          <div className="flex-col w-3/4 text-white py-10">
            
            <Title/>
            <MostPlayed/>

            <div className="flex w-full gap-4">

              <Accessories/>
              <Library/>

            </div>

          </div>

          {/*Second Main Column*/}
          <div className="flex-col w-1/4 py-10 ">

            <Social/>

            <div className="flex-col w-full bg-backgrounds rounded-3xl px-5 py-5 backdrop-filter backdrop-blur-sm bg-opacity-30">
              
              <div className="flex justify-between items-center">
                <div className="flex-col">
                  <div className="text-gray font-semibold">Party Chat</div>
                  <div className="text-white font-semibold">Scott + 7 others</div>
                </div>
                <div>Icons</div>
              </div>

              <div className="flex mt-5 justify-between items-center">
                <input type="text" placeholder="Type a message..." className=" bg-backgrounds outline-none text-white font-semibold opacity-30"></input>
                <div>Icon</div>

              </div>

              
              
              
            
            
            </div>
            

          </div>

        </div>





      </div>
      
      
    </div>
  )
}

export default App
