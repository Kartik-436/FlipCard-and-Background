import React from "react";
import Bg from "./Components/Background_Event";
import Card from "./Components/Flip_Event_Card";

const App = () => {
  return (
    <React.Fragment>
      <div className="h-auto overflow-hidden">
        <Bg />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-[7vh] pt-32 bg-[#151515]">
          {/* First Column */}
          <div className="flex flex-col items-center md:items-end gap-[5vh] md:gap-28">
            <Card
              headUp="App"
              headDown="Development"
              Box1="IOS"
              Box2="Android"
              ImgLink="/gdg_logo.png"
              Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
              link="#"
              color="red"
            />
            <Card
              headUp="Frontend"
              headDown="Development"
              Box1="Web"
              Box2="Angular Js"
              ImgLink="/gdg_logo.png"
              Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
              link="#"
              color="green"
            />
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-[5vh] items-center md:items-start md:gap-28">
            <Card
              headUp="Frontend"
              headDown="Development"
              Box1="Web"
              Box2="React Js"
              ImgLink="/gdg_logo.png"
              Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
              link="#"
              color="blue"
            />
            <Card
              headUp="Mobile"
              headDown="Development"
              Box1="IOS"
              Box2="Android"
              ImgLink="/gdg_logo.png"
              Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
              link="#"
              color="yellow"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
