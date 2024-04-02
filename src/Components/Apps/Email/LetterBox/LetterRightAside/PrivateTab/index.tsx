import React, { useState } from 'react'
import { FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../redux-toolkit/store';
import { Badges, LI, P, UL } from '../../../../../../AbstractElements';
import SvgIcon from '../../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';
import { privateEmailData } from '../../../../../../Data/AppsData/EmailData';
import { handleEnvelope, handleInterview } from '../../../../../../redux-toolkit/reducers/LetterBoxReducer';

export default function PrivateTab() {
    const dispatch = useDispatch();
    const { faIcon } = useSelector((state: RootState) => state.email);
    const [fill, setFill] = useState(false)
    const handleValue = () => dispatch(handleInterview(true))
    return (
        <div className="mail-body-wrapper">
            <UL className='simple-list'>
                {privateEmailData.map((data, i) => (
                    <LI className="inbox-data" key={i}>
                        <div className="inbox-user">
                            <FormGroup className="m-0" check inline>
                                <Input className={`checkbox-${data.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
                                <Label check htmlFor={`emailCheckbox${i}`} />
                            </FormGroup>
                            <SvgIcon className={`important-mail ${fill ? "active" : ""}`} iconId="fill-star" onClick={() => setFill(!fill)} />
                            <div className="rounded-border">
                                <div className={data.color === "success" ? "circle-success" : ""}>
                                    <P className={`txt-${data.color}`}>{data.shortName}</P>
                                </div>
                            </div>
                            <P>{data.name}</P>
                        </div>
                        <div className="inbox-message">
                            <div className="email-data">
                                <span>
                                    {data.message}
                                    <span>{data.subMessage}</span>
                                </span>
                                {data.badge &&
                                    data.badge.map((item, i) => (
                                        <Badges color="transparent" className={`badge-light-${item.color}`} key={i} onClick={handleValue}> {item.title} </Badges>
                                    ))}
                            </div>
                            <div className="email-timing">
                                <span>{data.time}</span>
                            </div>
                            <div className="email-options">
                                <i className={`fa fa-envelope-o envelope-1 ${!faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(true))} />
                                <i className={`fa fa-envelope-open-o envelope-2 ${faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(false))} />
                                <i className="fa fa-trash-o trash-3" />
                                <i className="fa fa-print" />
                            </div>
                        </div>
                    </LI>
                ))}
            </UL>
        </div>
    )
}
