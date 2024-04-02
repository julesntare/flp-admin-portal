import { H3, P } from '../../../../../../AbstractElements';
import { DunzoLogin, DunzoLoginText } from '../../../../../../Utils/Constants';
import StaticModalForm from '../../../StaticModal/StaticModalForm';

type propsType = {
    toggle: () => void;
}

function Modal2Body ({ toggle }: propsType) {
    return (
        <div className="modal-toggle-wrapper">
            <H3>{DunzoLogin}</H3>
            <P>{DunzoLoginText}</P>
            <StaticModalForm toggle={toggle} />
        </div>

    )
}
export default Modal2Body;