import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import { ModalTitle, UiKits } from "../../../Utils/Constants";
import { Container, Row } from "reactstrap";
import BasicModal from "./BasicModal";
import SizeModal from "./SizeModal";
import FullscreenModal from "./FullscreenModal";
import CenteredModal from "./CenteredModal";
import ToggleModal from "./ToggleModal";
import StaticModal from "./StaticModal";
import CustomModals from "./CustomModals";

export default function ModalContainer() {
    return (
        <Fragment>
            <Breadcrumbs pageTitle={ModalTitle} parent={UiKits} title={ModalTitle} />
            <Container fluid>
                <Row>
                    <BasicModal/>
                    <SizeModal/>
                    <FullscreenModal/>
                    <CenteredModal/>
                    <ToggleModal/>
                    <StaticModal/>
                    <CustomModals/>
                </Row>
            </Container>
        </Fragment>
    )
}
