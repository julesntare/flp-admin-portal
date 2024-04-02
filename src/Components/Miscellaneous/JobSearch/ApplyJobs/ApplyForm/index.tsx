import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import { Btn, H3, Image, P } from '../../../../../AbstractElements'
import { Cancel, Href, Submit, UIDesigner } from '../../../../../Utils/Constants'
import PersonalDetails from './PersonalDetails'
import YourEducation from './YourEducation'
import YourExperience from './YourExperience'
import UploadFiles from './UploadFiles'
import { dynamicImage } from '../../../../../Utils'

export default function ApplyForm() {
    return (
        <Col xxl={9} xl={8} className="box-col-8">
            <Card>
                <div className="job-search">
                    <CardBody className="pb-0">
                        <div className="d-flex">
                            <Image className="img-40 img-fluid m-r-20" src={dynamicImage(`job-search/1.jpg`)} alt="" />
                            <div className="flex-grow-1">
                                <H3 className="f-w-600">
                                    <a href={Href}>{UIDesigner}</a>
                                    <span className="pull-right">
                                        <Btn color='primary'><span><i className="fa fa-check text-white"></i></span> {'Save this job'}</Btn>
                                    </span>
                                </H3>
                                <P>{'Endless Telecom & Technologies , NY'}
                                    <span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i></span>
                                </P>
                            </div>
                        </div>
                        <div className="job-description">
                            <PersonalDetails />
                            <YourEducation />
                            <YourExperience />
                            <UploadFiles />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Btn color='primary' className='me-2'>{Submit}</Btn>
                        <Btn color='light'>{Cancel}</Btn>
                    </CardFooter>
                </div>
            </Card>
        </Col>
    )
}
