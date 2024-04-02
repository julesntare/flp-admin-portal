import React from 'react'
import { HistoryCardProps } from '../../../../../Types/ContactType'
import { Media, ModalHeader } from 'reactstrap'
import { H3, P } from '../../../../../AbstractElements'
import { ContactCreated, ContactHistory, ContactHistoryNotModified } from '../../../../../Utils/Constants'

export default function HistoryCard({ historyToggle, showHistory }: HistoryCardProps) {
    return (
        <div className={showHistory ? 'show' : ''} id="right-history">
            <ModalHeader className="p-20 w-100" toggle={historyToggle}>{ContactHistory}</ModalHeader>
            <div className='history-details'>
                <div className='text-center'>
                    <i className='icofont icofont-ui-edit'></i>
                    <P>{ContactHistoryNotModified}</P>
                </div>
                <Media>
                    <i className='icofont icon-star me-3'></i>
                    <Media className='mt-0' body>
                        <H3 className='mt-0'>{ContactCreated}</H3>
                        <P className='mb-0'>{'Contact is created via mail'}</P>
                        <span className='f-12'>{'Sep 10, 2023 4:00'}</span>
                    </Media>
                </Media>
            </div>
        </div>
    )
}
