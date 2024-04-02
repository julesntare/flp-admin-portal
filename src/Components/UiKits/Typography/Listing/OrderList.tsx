import { Col } from 'reactstrap'
import { Accordion, Alert, Animations, Avatars, BonusUi, Dropdown, Grid, OrderListTitle, Tabs, Tagpills, Typography, UIKits } from '../../../../Utils/Constants'
import { H6, LI, OL } from '../../../../AbstractElements'

export default function OrderList() {
    return (
        <Col md={6} xxl={4}>
            <div className='card-wrapper border rounded-3 h-100'>
                <H6 className="sub-title fw-bold">{OrderListTitle}</H6>
                <OL>
                    <LI>{UIKits}</LI>
                    <LI>{BonusUi}</LI>
                    <LI>{Animations}</LI>
                    <LI>
                        <OL>
                            <LI>{Typography}</LI>
                            <LI>{Avatars}</LI>
                            <LI>{Grid}</LI>
                            <LI>{Tagpills}</LI>
                            <LI>{Alert}</LI>
                        </OL>
                    </LI>
                    <LI>{Dropdown}</LI>
                    <LI>{Tabs}</LI>
                    <LI>{Accordion}</LI>
                </OL>
            </div>
        </Col>
    )
}