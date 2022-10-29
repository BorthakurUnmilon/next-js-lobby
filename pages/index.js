import React from "react";
import Card from "../components/Card";
import axios from "axios";
import config from "../config/config";
import Shimmer from "../components/Shimmer";
import Launcher from "./Launcher";

function Home() {
  const [type, setType] = React.useState("free-play");
  const [isLoading, setIsLoading] = React.useState(false);
  const [gameList, setGameList] = React.useState([]);
  const [isPlayClicked, setIsPlayClicked] = React.useState(false);
  const [game , setGame] = React.useState({});

  const play = () => {
    setIsPlayClicked(true)
  };

  const getGameList = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        config.url.serverprod +
          "api/getGamesList?platformId=0&operatorId=demo&isReal=true"
      );
      setGameList(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };


  React.useEffect(() => {
    getGameList();
  }, [type]);

  return isPlayClicked ? <Launcher /> : (
    <div className="container">
      <div className="logo">
        <img className="nelogo" src="/icons/nelogo.png" alt="nelogo" />
      </div>
      <div className="nav-bar">
        <div
          onClick={() => setType("free-play")}
          className="free-play"
          style={{ background: type === "free-play" ? "#30AB65" : null }}
        >
          <img className="joystick" src="/icons/freeplay.svg" alt="freeplay" />
          <div className="free-play-text">Free To Play</div>
        </div>
        <div
          onClick={() => setType("cash-play")}
          className="cash-play"
          style={{ background: type === "cash-play" ? "#30AB65" : null }}
        >
          <img className="joystick" src="/icons/cashplay.svg" alt="cashplay" />
          <div className="cash-play-text">Pay To Play</div>
        </div>
      </div>
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="games">
          {gameList.map((game, index) => (
            <Card key={index} game={game} setIsPlayClicked={setIsPlayClicked} onPlayClick={play} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
