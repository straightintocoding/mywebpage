import React from "react";
import "../../../styles/projects.css";
import { Link } from "react-router-dom";
const Appsgrid = () => {
  return (
    <div>
      <div className="appgrid">
        <div>
          <div className="post">
            <img
              class="projectimg "
              src="https://source.unsplash.com/300x200/?coding,Programming"
              alt="img"
            />
            <div className="postpreview">
              <h6>Covid !9</h6>
              <p>This is a projects about covid 19. Covid 19 tracker</p>
              <Link to="./Test">Learn More</Link>
            </div>
          </div>
        </div>

        <div>
          <div className="post">
            <img
              class="projectimg "
              src="https://source.unsplash.com/300x200/?programmning,laptop"
              alt="img"
            />
            <div className="postpreview">
              <h6>Covid !9</h6>
              <p>This is a projects about covid 19. Covid 19 tracker</p>
              <a href="google.com">View</a>
            </div>
          </div>
        </div>

        <div>
          <div className="post">
            <img
              class="projectimg "
              src="https://source.unsplash.com/300x200/?code,laptop"
              alt="img"
            />
            <div className="postpreview">
              <h6>Covid !9</h6>
              <p>This is a projects about covid 19. Covid 19 tracker</p>
              <a href="google.com">View</a>
            </div>
          </div>
        </div>

        <div>
          <div className="post">
            <img
              class="projectimg "
              src="https://source.unsplash.com/300x200/?facebook,facebook"
              alt="img"
            />
            <div className="postpreview">
              <h6>Facebook</h6>
              <p>This is a projects about Messaging App.</p>
              <Link to="./Facebookapp">View</Link>
            </div>
          </div>
        </div>

        <div>
          <div className="post">
            <img
              class="projectimg "
              src="https://source.unsplash.com/300x200/?code,laptop"
              alt="img"
            />
            <div className="postpreview">
              <h6>Covid !9</h6>
              <p>This is a projects about covid 19. Covid 19 tracker</p>
              <a href="google.com">View</a>
            </div>
          </div>
        </div>

        <div>
          <div className="post">
            <img
              class="projectimg "
              src="https://source.unsplash.com/300x200/?code,laptop"
              alt="img"
            />
            <div className="postpreview">
              <h6>Covid !9</h6>
              <p>This is a projects about covid 19. Covid 19 tracker</p>
              <a href="google.com">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appsgrid;
