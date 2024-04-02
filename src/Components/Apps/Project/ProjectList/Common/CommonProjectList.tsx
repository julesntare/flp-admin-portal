import React from 'react'
import { Col, Row } from 'reactstrap'
import { Badges, H3, Image, LI, P, ProgressBar, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { Comment, Done, Issues, Resolved } from '../../../../../Utils/Constants'
import { CommonProjectListProps } from '../../../../../Types/ProjectType'

export default function CommonProjectList({ item }: CommonProjectListProps) {
    return (
        <Col xxl={4} lg={4} md={6} className='box-col-33'>
            <div className='project-box'>
                <Badges color={item.badge === 'Done' ? 'success' : 'secondary'}>{item.badge}</Badges>
                <H3>{item.title}</H3>
                <div className="d-flex">
                    <Image className='img-20 me-1 rounded-circle' src={dynamicImage(item.image)} alt='' />
                    <div className="flex-grow-1">
                        <P>{item.sites}</P>
                    </div>
                </div>
                <P>{item.description}</P>
                <Row className='details'>
                    <Col xs={6}>
                        <span>{Issues} </span>
                    </Col>
                    <Col xs={6} className={`font-${item.badge === 'Done' ? 'success' : 'secondary'}`}>
                        {item.issue}
                    </Col>
                    <Col xs={6}>
                        <span>{Resolved}</span>
                    </Col>
                    <Col xs={6} className={`font-${item.badge === 'Done' ? 'success' : 'secondary'}`}>
                        {item.resolved}
                    </Col>
                    <Col xs={6}>
                        <span>{Comment}</span>
                    </Col>
                    <Col xs={6} className={`font-${item.badge === 'Done' ? 'success' : 'secondary'}`}>
                        {item.comment}
                    </Col>
                </Row>
                <div className='customers'>
                    <UL className='simple-list flex-row'>
                        <LI className='d-inline-block' >
                            <Image className='img-30 rounded-circle' src={dynamicImage(item.customer1)} alt='' />
                        </LI>
                        <LI className='d-inline-block' >
                            <Image className='img-30 rounded-circle' src={dynamicImage(item.customer2)} alt='' />
                        </LI>
                        <LI className='d-inline-block' >
                            <Image className='img-30 rounded-circle' src={dynamicImage(item.customer3)} alt='' />
                        </LI>
                        <LI className='d-inline-block ms-2' >
                            <P className='f-12' >{`+${item.like} More`}</P>
                        </LI>
                    </UL>
                </div>
                <div className='project-status mt-4'>
                    <div className="d-flex mb-0">
                        <P>{item.progress}{'%'}</P>
                        <div className="flex-grow-1 text-end">
                            <span>{Done}</span>
                        </div>
                    </div>
                    <ProgressBar className='sm-progress-bar' color={item.progress === '100' ? 'success' : 'secondary'} value={item.progress} striped={item.progress !== '100' ? true : false} />
                </div>
            </div>
        </Col>
    )
}
