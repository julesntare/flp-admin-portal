import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import { HelperClassTitle, UiKits } from "../../../Utils/Constants";
import { Container, Row } from "reactstrap";
import BorderStyles from "./BorderStyles";
import BordersAndDisplays from "./BordersAndDisplays";
import BackgroundColors from "./BackgroundColors";
import BorderColor from "./BorderColor";
import ImageSize from "./ImageSize";
import FontStyle from "./FontStyle";
import FontWeight from "./FontWeight";
import TextColors from "./TextColors";
import FontSize from "./FontSize";

export default function HelperclassContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={HelperClassTitle} parent={UiKits} title={HelperClassTitle} />
            <Container fluid>
                <Row>
                    <BorderStyles/>
                    <BordersAndDisplays/>
                    <BackgroundColors/>
                    <BorderColor/>
                    <ImageSize/>
                    <FontStyle/>
                    <FontWeight/>
                    <TextColors/>
                    <FontSize/>
                </Row>
            </Container>
        </Fragment>
    )
}
