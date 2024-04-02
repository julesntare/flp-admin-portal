import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Btn, H3, H6, Image, LI, P, UL } from '../../../../../AbstractElements'
import { Apply, Href, JobDescription, ProductDesignerTitle, SaveThisJob, Share } from '../../../../../Utils/Constants'
import { jobDescriptionData } from '../../../../../Data/MiscellaneousData/JobSearchData'
import { dynamicImage } from '../../../../../Utils'

export default function ProductDesignerCard() {
    return (
        <Card>
            <div className="job-search">
                <CardBody>
                    <div className="d-flex"><Image className="img-40 img-fluid m-r-20" src={dynamicImage(`job-search/1.jpg`)} alt="" />
                        <div className="flex-grow-1">
                            <H6 className="f-w-600">
                                <a href={Href}>{ProductDesignerTitle}</a>
                                <span className="pull-right">
                                    <Link to={`${process.env.PUBLIC_URL}/miscellaneous/job-search/job-apply`}>
                                        <Btn color='primary'>{Apply}</Btn>
                                    </Link>
                                </span>
                            </H6>
                            <P>{'Endless - United States'}
                                <span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i></span>
                            </P>
                        </div>
                    </div>
                    <div className="job-description">
                        <H3>{JobDescription}</H3>
                        <P>{'Endless is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. Our designers contribute to clients’ projects at all stages of development. We might start from scratch, conducting user and stakeholder interviews, making personas and journey maps, and continue on to iterating on designs and prototypes through delivering final assets for launch. We might come into the middle of an in-flight program-size project and conduct analysis and usability correction or feature enhancement. We might provide research and vision for handoff to an internal development team.'}</P>
                    </div>
                    {jobDescriptionData.map((data) => (
                        <div className="job-description" key={data.id}>
                            <H3>{data.title}</H3>
                            <UL className='simple-list'>
                                {data.child.map((item) => (
                                    <LI key={item.id}>{item.list}</LI>
                                ))}
                            </UL>
                        </div>
                    ))}
                    <div className="job-description">
                        <Btn color='primary' className='me-2'><span><i className="fa fa-check"></i></span> {SaveThisJob}</Btn>
                        <Btn color='primary'><span><i className="fa fa-share-alt"></i></span> {Share}</Btn>
                    </div>
                </CardBody>
            </div>
        </Card>
    )
}
