import React from "react";
import "../../../styles/projects.css";
import { Link } from "react-router-dom";
const Gamesgrid = () => {
  return (
    <div>
      <div className="appgrid">
        <div>
          <div className="post">
            <img
              class="projectimg "
              src="https://source.unsplash.com/300x200/?mobile,snakegame"
              alt="img"
            />
            <div className="postpreview">
              <h6>Snake</h6>
              <p>Play Snake Game Online</p>
              <Link to="./Snake">Play Game</Link>
            </div>
          </div>
        </div>

        <div>
          <div className="post">
            <img
              class="projectimg "
              src="https://source.unsplash.com/300x200/?game,flappybird"
              alt="img"
            />
            <div className="postpreview">
              <h6>Flappy Bird</h6>
              <p>Play Flappy Bird Game Online</p>
              <a href="google.com">Play Game</a>
            </div>
          </div>
        </div>

        <div>
          <div className="post">
            <img
              class="projectimg "
              src="https://source.unsplash.com/300x200/?Tictactoe,mobile"
              alt="img"
            />
            <div className="postpreview">
              <h6>Tic Tac Toe</h6>
              <p>Play Tic Tac Toe Online</p>
              <a href="google.com">Play Game</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamesgrid;
