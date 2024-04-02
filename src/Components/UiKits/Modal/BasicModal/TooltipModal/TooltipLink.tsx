import { Fragment, useState } from 'react'
import { HoverText, Href, TooltipsModal } from '../../../../../Utils/Constants'
import { H5, P, ToolTip } from '../../../../../AbstractElements'
import { tooltipData } from '../../../../../Data/UiKitsData/ModalData';

export default function TooltipLink() {
    const [tooltips, setTooltips] = useState<{ [key: string]: boolean }>({});
    
    const toggleTooltip = (id: string) => {
        setTooltips(prevTooltips => ({
            ...prevTooltips,
            [id]: !prevTooltips[id]
        }));
    };
    return (
        <Fragment>
            <H5>{TooltipsModal}</H5>
            <P className="mt-2 mb-0">
            {tooltipData.map(({ id, content }) => (
                    <Fragment key={id}>
                        <a className="tooltip-test text-info" href={Href} id={id}>{content}</a>{HoverText}
                        <ToolTip autohide={true} isOpen={tooltips[id] || false} target={id} toggle={() => toggleTooltip(id)}>
                            {'Tooltip'}
                        </ToolTip>
                    </Fragment>
                ))}
            </P>
        </Fragment>
    )
}
