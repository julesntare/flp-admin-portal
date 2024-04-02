import { Fragment, useState } from 'react'
import { Btn, H5, P, ToolTip } from '../../../../../AbstractElements';
import CommonModal from '../../../../../Utils/CommonComponents/UiKitsCommon/CommonModal';
import { PopoverModal, This, TooltipButtonText, TooltipsPopovers, TriggerText } from '../../../../../Utils/Constants';
import TooltipLink from './TooltipLink';

export default function TooltipModal() {
    const [state, setState] = useState({ modalOpen: false, tooltipOpen: false});
    const handleModalToggle = () => {
        setState(prevState => ({
            ...prevState,
            modalOpen: !prevState.modalOpen
        }));
    };
    const handleTooltipToggle = () => {
        setState(prevState => ({
            ...prevState,
            tooltipOpen: !prevState.tooltipOpen
        }));
    };
    const data = {
        isOpen: state.modalOpen,
        header: true,
        footer: true,
        toggler: handleModalToggle,
        center: true,
        title: 'Tooltip and Popover Modal',
    };
    return (
        <Fragment>
            <Btn color='info' type="button" onClick={handleModalToggle}>{TooltipsPopovers}</Btn>
            <CommonModal modalData={data}>
                <H5>{PopoverModal}</H5>
                <P className="mt-2">{This}
                    <Btn className="popover-test" color='success' id="TooltipExample">{'button'}</Btn>{TriggerText}
                    <ToolTip autohide={true} isOpen={state.tooltipOpen} target="TooltipExample" toggle={handleTooltipToggle}>{TooltipButtonText}</ToolTip>
                </P><hr />
                <TooltipLink/>
            </CommonModal>
        </Fragment>
    )
}