import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Image, LI, UL } from '../../../../AbstractElements'
import { borderPrimarySubTitle } from '../../../../Data/BonusUiData/BasicCardData'
import { BorderPrimaryTitle, BryanOwens, GloriaAcheson, TeresaMosteller } from '../../../../Utils/Constants'
import { dynamicImage } from '../../../../Utils'

export default function BorderPrimary() {
    return (
        <Col md={4} xxl={4}>
            <Card className='height-equal'>
                <CommonCardHeader title={BorderPrimaryTitle} subTitle={borderPrimarySubTitle} headClass='pb-0 border-l-primary border-3' />
                <CardBody>
                    <UL>
                        <LI className="list-group-item-action active">
                            <Image className="rounded-circle" src={dynamicImage(`user/1.jpg`)} alt="user" />{TeresaMosteller}
                        </LI>
                        <LI className="list-group-item-action" >
                            <Image className="rounded-circle" src={dynamicImage(`user/3.jpg`)} alt="user" />{GloriaAcheson}
                        </LI>
                        <LI className="list-group-item-action" >
                            <Image className="rounded-circle" src={dynamicImage(`user/5.jpg`)} alt="user" />{BryanOwens}
                        </LI>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
