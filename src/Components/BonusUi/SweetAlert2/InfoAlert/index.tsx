import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Btn } from '../../../../AbstractElements'
import { InfoAlertTitle, Informational } from '../../../../Utils/Constants'
import { infoAlertSubTitle } from '../../../../Data/BonusUiData/SweetAlertData'

export default function InfoAlert() {
    const handleAlert = () => {
        Swal.fire({
            text: "Please Click on this button it's big surprise for you.",
            confirmButtonText: 'ok',
        }).then((result) => {
            result.isConfirmed && Swal.fire({ text: 'Thank you for visit Dunzo theme: true' })
        })
    }

    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={InfoAlertTitle} subTitle={infoAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='info' className="sweet-4" type="button" onClick={handleAlert}>{Informational}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
