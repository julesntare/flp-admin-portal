import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { basicAlertSubTitle } from '../../../../Data/BonusUiData/SweetAlertData'
import { Btn } from '../../../../AbstractElements'
import { BasicAlertTitle, ClickIt } from '../../../../Utils/Constants'

export default function BasicAlert() {
    const handleAlert = () => {
        Swal.fire('Welcome! to the Dunzo theme')
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={BasicAlertTitle} subTitle={basicAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn
                        color='primary'
                        className="sweet-1"
                        type="button"
                        onClick={handleAlert}
                    >
                        {ClickIt}
                    </Btn>
                </CardBody>
            </Card>
        </Col >
    )
}
