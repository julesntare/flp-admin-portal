import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Badges, H5, H6, P } from '../../../../AbstractElements';
import { Resolutions } from '../../../../Utils/Constants';

export default function ResolutionTimeline() {
    return (
        <VerticalTimelineElement className='cd-timeline-block' date='December 31 2022' icon={<div className="cd-timeline-img cd-movie bg-danger"><i className="icon-agenda" /></div>}>
            <div className="cd-timeline-content">
                <div className='timeline-wrapper'>
                    <Badges color='warning'>{Resolutions}</Badges>
                </div>
                <H5 className='m-0 f-w-500'>{'My Resolutions for 2023 '}</H5>
                <P className='mb-0'>{"I'm determined to streamline, organism, systematism, realign, and embrace life in 2023."}</P>
                <div className='time-content pt-2'>
                    <i className='icon-android'></i>
                    <H6>{' My Resolutions'}</H6>
                </div>
            </div>
        </VerticalTimelineElement>
    )
}
