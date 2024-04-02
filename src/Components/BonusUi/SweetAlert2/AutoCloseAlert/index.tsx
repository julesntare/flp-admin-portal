import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Btn } from '../../../../AbstractElements'
import { AutoCloseAlertTitle, Timer } from '../../../../Utils/Constants'
import { autoCloseAlertSubTitle } from '../../../../Data/BonusUiData/SweetAlertData'

export default function AutoCloseAlert() {
    const handleAlert = () => {
        Swal.fire({
            title: "Auto close alert!",
            text: 'just a wait! I will close in 30 second!',
            timer: 3000,
            showConfirmButton: false
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={AutoCloseAlertTitle} subTitle={autoCloseAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='primary' className="sweet-14" type="button" onClick={handleAlert}>{Timer}</Btn>
                </CardBody>
            </Card>
        </Col>

    )
}
