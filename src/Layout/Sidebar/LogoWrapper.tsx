import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../../AbstractElements";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-toolkit/store";
import { setSideBarToggle } from "../../redux-toolkit/reducers/LayoutReducer";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { dynamicImage } from "../../Utils";

export default function LogoWrapper() {
  const dispatch = useDispatch();
  const layoutState = useSelector((state: RootState) => state.layout);
  const handleSidebarToggle = () => {
    dispatch(setSideBarToggle(!layoutState.sideBarToggle));
  };

  return (
    <div className="logo-wrapper">
      <Link to={`${process.env.PUBLIC_URL}/dashboard`}>
        <Image
          className="img-fluid"
          src={dynamicImage(`logo/logo.png`)}
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <div className="toggle-sidebar" onClick={handleSidebarToggle}>
        <SvgIcon className="sidebar-toggle" iconId="toggle-icon" />
      </div>
    </div>
  );
}
