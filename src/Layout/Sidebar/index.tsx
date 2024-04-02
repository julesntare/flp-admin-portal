import React, { useState } from "react";
import LogoWrapper from "./LogoWrapper";
import LogoIconWrapper from "./LogoIconWrapper";
import { ArrowLeft, ArrowRight } from "react-feather";
import SidebarNav from "./SidebarNav";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-toolkit/store";
import ConfigDB from "../../Config/ThemeConfig";

export default function Sidebar() {
  const { sideBarToggle } = useSelector((state: RootState) => state.layout);
  const wrapper = ConfigDB.settings.sidebar.type;
  const [margin, setMargin] = useState(0);
  const [leftArrow, setLeftArrow] = useState(true);
  const sidebarIconType = useSelector(
    (state: RootState) => state.themeCustomizer.sideBarIconType
  );
  const sideBarIcon = sidebarIconType || ConfigDB.settings.sidebar.iconType;

  const scrollToRight = () => {
    if (margin > -3000) {
      setMargin((prevMargin) => prevMargin - 600);
      setLeftArrow(false);
    }
  };
  const scrollToLeft = () => {
    setMargin((prevMargin) => prevMargin + 600);
    if (margin === -600) {
      setMargin(0);
      setLeftArrow(true);
    }
  };
  return (
    <div
      className={`sidebar-wrapper ${sideBarToggle ? "close_icon" : ""}`}
      data-layout={sideBarIcon}
    >
      <div>
        <LogoWrapper />
        <LogoIconWrapper />
        <nav className="sidebar-main">
          <div
            className={`left-arrow ${leftArrow ? "disabled" : ""}`}
            id="left-arrow"
            onClick={scrollToLeft}
          >
            <ArrowLeft />
          </div>
          <div id="sidebar-menu" style={{ marginLeft: margin + "px" }}>
            <SidebarNav />
          </div>
          {wrapper === "horizontal-wrapper" && (
            <div
              className="right-arrow"
              onClick={scrollToRight}
              id="right-arrow"
            >
              <ArrowRight />
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
