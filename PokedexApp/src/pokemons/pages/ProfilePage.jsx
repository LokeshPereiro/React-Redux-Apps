import React, { useContext } from "react";
import { AuthContext } from "../../auth/context";
import { linkedin, github } from "../../assets/images";
import { Link } from "react-router-dom";

export const ProfilePage = () => {
  const { loggedUser } = useContext(AuthContext);
  // console.log({ loggedUser });
  return (
    <>
      <div className="card profileContainer">
        <img
          src={loggedUser?.photoURL}
          // className="card-img-top"
          alt={loggedUser.displayName}
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            <b>Name:</b> {loggedUser.displayName}
          </h5>
          <p className="card-text  text-center">
            <b>EmaiL:</b> {loggedUser.email}
          </p>

          <div className="iconContainer">
            <a href="https://github.com/LokeshPereiro" target="_blank">
              <img src={github} alt="github link" />
            </a>
            <a
              href="https://www.linkedin.com/in/lokesh-pereiro-334818135/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin link" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
