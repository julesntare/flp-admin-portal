import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Btn } from '../../../../AbstractElements'
import { LoginSuccessfully, SuccessMessageTitle } from '../../../../Utils/Constants'
import { successMessageSubTitle } from '../../../../Data/BonusUiData/SweetAlertData'

export default function SuccessMessage() {
    const handleAlert = () => {
        Swal.fire({
            title: "Good job!",
            text: 'You clicked the button!',
            icon: 'success'
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={SuccessMessageTitle} subTitle={successMessageSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='success' className="sweet-13" type="button" onClick={handleAlert}>{LoginSuccessfully}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
