import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Btn } from '../../../../AbstractElements'
import { DangerAlertTitle, DangerMode } from '../../../../Utils/Constants'
import { dangerAlertSubTitle } from '../../../../Data/BonusUiData/SweetAlertData'

export default function DangerAlert() {
    const handleAlert = () => {
        Swal.fire({
            title: "it's danger",
            text: 'Something went wrong!',
            icon: 'error'
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={DangerAlertTitle} subTitle={dangerAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='danger' className="sweet-7" type="button" onClick={handleAlert}>{DangerMode}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
