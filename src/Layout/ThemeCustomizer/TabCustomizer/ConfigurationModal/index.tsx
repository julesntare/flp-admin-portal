import React from 'react'
import { Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { toast } from 'react-toastify'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector } from 'react-redux';
import { ConfigurationProps } from '../../../../Types/LayoutTypes'
import { Btn, P } from '../../../../AbstractElements'
import ConfigDB from '../../../../Config/ThemeConfig'
import { Cancel, ConfigurationTitle, CopyTextButton } from '../../../../Utils/Constants';
import { RootState } from '../../../../redux-toolkit/store';

export default function Configuration({ modal, toggle }: ConfigurationProps) {
    const { layout_type, sideBarIconType } = useSelector((state: RootState) => state.themeCustomizer);
    const handleCopy = () => {
        toast.success("Code Copied to clipboard !", {
            position: toast.POSITION.BOTTOM_RIGHT,
        })
    }
    return (
        <Modal isOpen={modal} toggle={toggle} className="modal-body" centered={true}>
            <ModalHeader toggle={toggle}>{ConfigurationTitle}</ModalHeader>
            <ModalBody>
                <Container fluid={true} className="bd-example-row">
                    <Row>
                        <P>{"To replace our design with your desired theme. Please do configuration as mention"}</P>
                        <P>
                            <b> {"Path : src > Config > ThemeConfig.jsx "}</b>
                        </P>
                    </Row>
                    <pre>
                        <code>
                            <div> {"export const ConfigDB ="}&#123;</div>
                            <div> {"settings"}&#58; &#123;</div>
                            <div>
                                {"layout_type"}&#58; '{layout_type}',
                            </div>
                            <div>
                                {"layout_class"}&#58; '{ConfigDB.settings.layout_class}',
                            </div>
                            <div> {"sidebar"}&#58; &#123;</div>
                            <div>
                                {"type"}&#58; '{ConfigDB.settings.sidebar.type}',
                            </div>
                            <div>
                                {"iconType"}&#58; '{sideBarIconType}',
                            </div>
                            <div> &#125;,</div>
                            <div>
                                {"sidebar_setting"}&#58; '{ConfigDB.settings.sidebar_setting}',
                            </div>
                            <div> &#125;,</div>
                            <div> {"color"}&#58; &#123;</div>
                            <div>
                                {"primary_color"}&#58; '{ConfigDB.color.primary_color}',
                            </div>
                            <div>
                                {"secondary_color"}&#58; '{ConfigDB.color.secondary_color}',
                            </div>
                            <div>
                                {"mix_background_layout"}&#58; '{ConfigDB.color.mix_background_layout}',
                            </div>
                            <div> &#125;,</div>
                            <div>
                                {"router_animation"}&#58; '{ConfigDB.router_animation}'
                            </div>
                            <div> &#125;</div>
                        </code>
                    </pre>
                </Container>
            </ModalBody>
            <ModalFooter>
                <CopyToClipboard text={JSON.stringify(ConfigDB)}>
                    <Btn color="primary" className="notification" onClick={handleCopy}>{CopyTextButton}</Btn>
                </CopyToClipboard>
                <Btn color="secondary" onClick={toggle}>{Cancel}</Btn>
            </ModalFooter>
        </Modal>
    )
}
