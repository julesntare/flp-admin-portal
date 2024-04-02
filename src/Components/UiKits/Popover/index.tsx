import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import { PopoverTitle, UiKits } from "../../../Utils/Constants";
import { Container, Row } from "reactstrap";
import BasicPopover from "./BasicPopover";
import PopoverDirection from "./PopoverDirection";
import PopoverOffset from "./PopoverOffset";

export default function PopoverContainer() {
  return (
    <Fragment>
      <Breadcrumbs pageTitle={PopoverTitle} parent={UiKits} title={PopoverTitle} />
      <Container fluid>
        <Row className="popover-main">
          <BasicPopover />
          <PopoverDirection />
          <PopoverOffset />
        </Row>
      </Container>
    </Fragment>
  )
}
