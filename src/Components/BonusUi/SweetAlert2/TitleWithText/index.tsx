import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Btn } from '../../../../AbstractElements'
import { Surprise, TitleWithTextTitle } from '../../../../Utils/Constants'
import { titleWithTextSubTitle } from '../../../../Data/BonusUiData/SweetAlertData'

export default function TitleWithText() {
    const handleAlert = () => {
        Swal.fire(
            "It's Magic!",
            'Thank you for visiting Dunzo theme'
        )
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={TitleWithTextTitle} subTitle={titleWithTextSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn
                        color='secondary'
                        className="sweet-2"
                        type="button"
                        onClick={handleAlert}
                    >
                        {Surprise}
                    </Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
