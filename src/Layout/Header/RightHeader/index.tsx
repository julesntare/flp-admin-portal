import { Col } from "reactstrap";
import { UL } from "../../../AbstractElements";
import SearchContainer from "./SearchContainer";
import Notification from "./Notification";
import MoonLight from "./MoonLight";
import ProfileHeader from "./ProfileHeader";

export default function RightHeader() {
  return (
    <Col
      xxl={7}
      xl={8}
      xs="auto"
      className="nav-right box-col-6 pull-right right-header p-0 ms-auto"
    >
      <UL className="nav-menus simple-list flex-row">
        <SearchContainer />
        <Notification />
        <MoonLight />
        <ProfileHeader />
      </UL>
    </Col>
  );
}
