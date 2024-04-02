import React from "react";
import { Row } from "reactstrap";
import HeaderLogo from "./HeaderLogo";
import RightHeader from "./RightHeader";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-toolkit/store";

export default function Header() {
  const { sideBarToggle } = useSelector((state: RootState) => state.layout);

  return (
    <div className={`page-header ${sideBarToggle ? "close_icon" : ""}`}>
      <Row className="header-wrapper m-0">
        <HeaderLogo />
        <RightHeader />
      </Row>
    </div>
  );
}
