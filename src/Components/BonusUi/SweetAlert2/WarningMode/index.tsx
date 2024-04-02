import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Btn } from '../../../../AbstractElements'
import { AlertMode, WarningModeTitle } from '../../../../Utils/Constants'
import { warningModeSubTitle } from '../../../../Data/BonusUiData/SweetAlertData'

export default function WarningMode() {
    const handleAlert = () => {
        Swal.fire({
            title: "Good job!",
            text: 'You clicked the button!',
            icon: 'warning'
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={WarningModeTitle} subTitle={warningModeSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='warning' className="sweet-6" type="button" onClick={handleAlert}>{AlertMode}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
