import React from "react";
import "../Styles/ProfilePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPenToSquare,
  faPen,
  faAlignRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="heading">
          <FontAwesomeIcon className="me-2" icon={faArrowLeft} />
          Profile
        </div>
        <hr/>
        <div className="box">
          <div className="img-box">
            <div className="imgg">
              <img src="src\assets\profile.jpg" alt="img-here" />
            </div>
            <div className="user-name">Nirmal_bsdk</div>
          </div>
          <div className="user-pass-box my-5 mx-3">
            <div className="username my-2 ">
              <label htmlFor="">Username:</label>
              <div className="">Nirmal_bsdk</div>
              <FontAwesomeIcon className="edit" icon={faPenToSquare} />
            </div>
            <div className="password">
              <label htmlFor="">Password :</label>
              <div className="">Aditi more</div>
              <FontAwesomeIcon className="edit" icon={faPenToSquare} />
            </div>
          </div>
          <div className="create-poll">
            <div className="ms-2">Create Poll</div>
            <div className="me-2">
              <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
        </div>
        <hr className="line"/>
        <div className="footer">
          <div>
            <FontAwesomeIcon className=" footer-icon" icon={faAlignRight} />
          </div>
          <div>
            <FontAwesomeIcon className=" edit footer-icon" icon={faUser} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
