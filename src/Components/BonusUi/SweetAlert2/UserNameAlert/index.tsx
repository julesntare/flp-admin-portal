import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Btn } from '../../../../AbstractElements'
import { UserNameAlertTitle, Username } from '../../../../Utils/Constants'
import { userNameAlertSubTitle } from '../../../../Data/BonusUiData/SweetAlertData'

export default function UserNameAlert() {
    const handleAlert = () => {
        Swal.fire({
            input: 'text',
            inputLabel: 'Please! Submit Your Username :'
        }).then((result) => {
            result.isConfirmed && Swal.fire({ text: `Your name is : ${result.value}` })
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={UserNameAlertTitle} subTitle={userNameAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='secondary' className="sweet-13" type="button" onClick={handleAlert}>{Username}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
