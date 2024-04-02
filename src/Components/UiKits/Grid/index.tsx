import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import { Container, Row } from "reactstrap";
import GridOptions from "./GridOptions";
import GridColumn from "./GridColumn";
import VerticalAlignment from "./VerticalAlignment";
import HorizontalAlignment from "./HorizontalAlignment";
import Nesting from "./Nesting";
import Order from "./Order";
import Offset from "./Offset";
import { GridTitle, UiKits } from "../../../Utils/Constants";

export default function GridContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={GridTitle} parent={UiKits} title={GridTitle} />
            <Container fluid>
                <Row>
                    <GridOptions/>
                    <GridColumn/>
                    <VerticalAlignment/>
                    <HorizontalAlignment/>
                    <Nesting/>
                    <Order/>
                    <Offset/>                    
                </Row>
            </Container>
        </Fragment>
    )
}
