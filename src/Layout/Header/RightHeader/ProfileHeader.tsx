import React from "react";
import { Link } from "react-router-dom";
import { Image, LI, P, UL } from "../../../AbstractElements";
import { Admin, HelenWalter, Href, Logout } from "../../../Utils/Constants";
import { profileHeaderData } from "../../../Data/HeaderData/RightHeaderData";
import FeatherIconCom from "../../../Utils/CommonComponents/CommonIcons/FeatherIconCom";
import { dynamicImage } from "../../../Utils";

export default function ProfileHeader() {
  const logout = () => {
    localStorage.clear();
  };
  return (
    <LI className="profile-nav onhover-dropdown p-0">
      <div className="d-flex align-items-center profile-media">
        <div className="flex-grow-1">
          <span>{HelenWalter}</span>
          <P className="mb-0">
            {Admin} <i className="middle fa fa-angle-down"></i>
          </P>
        </div>
      </div>
      <UL className="profile-dropdown onhover-show-div simple-list">
        {profileHeaderData.map((data) => (
          <LI key={data.id}>
            <Link to={Href}>
              <FeatherIconCom iconName={data.icon} />
              <span>{data.text}</span>
            </Link>
          </LI>
        ))}
        <LI>
          <Link onClick={logout} to={`${process.env.PUBLIC_URL}/login`}>
            <FeatherIconCom iconName={"LogIn"} />
            <span>{Logout}</span>
          </Link>
        </LI>
      </UL>
    </LI>
  );
}
