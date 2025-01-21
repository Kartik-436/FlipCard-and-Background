/* eslint-disable no-unused-vars */
import React from 'react'
import { RedCard, BlueCard, GreenCard, YellowCard } from './Components/Flip_Event_Card';

const App = () => {
  return (
    <div className="grid grid-cols-2 gap-10 pt-32 bg-[#151515]">
      {/* First Column */}
      <div className="flex flex-col items-end gap-28">
        <RedCard headUp="App" headDown="Development" Box1="IOS" Box2="Android" ImgLink="/gdg_logo.png" Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " />
        
        <GreenCard headUp="Frontend" headDown="Development" Box1="Web" Box2="Angular Js" ImgLink="/gdg_logo.png" Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "/>
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-28">
        <BlueCard headUp="Frontend" headDown="Development" Box1="Web" Box2="React Js" ImgLink="/gdg_logo.png" Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "/>

        <YellowCard headUp="Mobile" headDown="Development" Box1="IOS" Box2="Android" ImgLink="/gdg_logo.png" Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "/>
      </div>
    </div>
  )
}

export default App
