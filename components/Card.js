import Image from "next/image";
import React from "react";
import config from '../config/config';
const Card = ({ game, onPlayClick}) => {
 
  const icon = config.games?.find(item => item?.gameCode.toLowerCase() === game?.gameCode.toLowerCase())?.icon;
  return (
    <div>
      <div className="card">
        <div className="card-block">
          <div className="card-image">
            <img className="game-icon" src= {"/icons/"+icon} alt="game icon" />
          </div>
          <div className="card-content">
            <div>
              <div className="match-name">{game.name}</div>
              <ul className="keywords">
                <li className="keyword">Real</li>
                <li className="keyword">Action</li>
                <li className="keyword">Fiction</li>
              </ul>
              <div className="game-description">
                Match Predictor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corrupti voluptatibus culpa, nostrum quisquam
                porro quaerat aliquam, totam doloribus atque natus, illo eaque
                quibusdam quasi aut temporibus.
              </div>
            </div>
            <div className="actions">
              <button onClick={onPlayClick} className="play-game-btn">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
