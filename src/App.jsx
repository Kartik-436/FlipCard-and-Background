import React from "react";
import {
  RedCard,
  BlueCard,
  GreenCard,
  YellowCard,
} from "./Components/Flip_Event_Card";
import Bg from "./Components/Background_Event";

const App = () => {
  return (
    <React.Fragment>
      <div className="h-auto overflow-hidden">
        <Bg />

        <div className="grid grid-cols-2 gap-10 pt-32 bg-[#151515]">
          {/* First Column */}
          <div className="flex flex-col items-end gap-[5vh] md:gap-28">
            <RedCard
              headUp="App"
              headDown="Development"
              Box1="IOS"
              Box2="Android"
              ImgLink="/gdg_logo.png"
              Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
              link="#"
            />
            <GreenCard
              headUp="Frontend"
              headDown="Development"
              Box1="Web"
              Box2="Angular Js"
              ImgLink="/gdg_logo.png"
              Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
              link="#"
            />
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-[5vh] md:gap-28">
            <BlueCard
              headUp="Frontend"
              headDown="Development"
              Box1="Web"
              Box2="React Js"
              ImgLink="/gdg_logo.png"
              Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
              link="#"
            />
            <YellowCard
              headUp="Mobile"
              headDown="Development"
              Box1="IOS"
              Box2="Android"
              ImgLink="/gdg_logo.png"
              Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
              link="#"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
