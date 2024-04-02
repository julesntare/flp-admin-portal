import React from 'react'
import { Label } from 'reactstrap'
import { H5, H6, Image, LI, P } from '../../../../../AbstractElements'
import { HoverMeetupText1, HoverMeetupText2 } from '../../../../../Utils/Constants'
import { hoverMeetupData } from '../../../../../Data/BonusUiData/TimelineData'
import { dynamicImage } from '../../../../../Utils'

export default function HoverMeetup() {
    return (
        <LI className='timeline-event'>
            <Label className='timeline-event-icon'></Label>
            <div className='timeline-event-wrapper'>
                <P className='timeline-thumbnail'>{"December 2022 - Meetup"}</P>
                <H5>{HoverMeetupText1}</H5>
                <div className='text-muted'>
                    {HoverMeetupText2}
                    <div className='designer-details'>
                        {hoverMeetupData.map((data) => (
                            <div className='designer-profile' key={data.id}>
                                <div className='designer-wrap'>
                                    <Image className='designer-img' src={dynamicImage(`avtar/${data.image}`)} alt='profile' body={true} />
                                    <div className='designer-content'>
                                        <H6>{data.name}</H6>
                                        <P>{data.number}</P>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </LI>
    )
}
