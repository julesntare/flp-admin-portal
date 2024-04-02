import { Fragment } from "react";
import { AccordionTitle, UiKits } from "../../../Utils/Constants";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import { Container, Row } from "reactstrap";
import SimpleAccordion from "./SimpleAccordion";
import FlushAccordion from "./FlushAccordion";
import MultipleCollapse from "./MultipleCollapse";
import IconAccordion from "./IconAccordion";
import OutlineAccordion from "./OutlineAccordion";
import HorizontalAccordion from "./HorizontalAccordion";
import CollapesAccordion from "./CollapesAccordion";

export default function AccordionContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={AccordionTitle} parent={UiKits} title={AccordionTitle} />
            <Container fluid>
                <Row>
                    <SimpleAccordion />
                    <FlushAccordion />
                    <MultipleCollapse />
                    <IconAccordion />
                    <OutlineAccordion />
                    <HorizontalAccordion />
                    <CollapesAccordion />
                </Row>
            </Container>
        </Fragment>
    )
}
