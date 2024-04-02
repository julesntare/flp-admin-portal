import React from 'react'
import { Col, Input } from 'reactstrap'
import { H5, LI, P, UL } from '../../../../../AbstractElements'
import { Upgrade, UpgradeParagraph, UpgradeTitle } from '../../../../../Utils/Constants'
import { upgradeVariationCheckbox } from '../../../../../Data/Forms/FormControlsData'

export default function VariationCheckboxUpgrade() {
    
    return (
        <Col xl={8} md={7}>
            <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                <section className="main-upgrade">
                    <div> <i className="fa fa-rocket"></i>
                        <H5 className="mb-2">{UpgradeTitle} <span className="txt-primary">{Upgrade}</span></H5>
                        <P className="text-muted mb-2">{UpgradeParagraph}</P>
                    </div>
                    <div className="variation-box">
                        {upgradeVariationCheckbox.map((data) => (
                            <div className="selection-box" key={data.id}>
                                <Input id={`feature${data.id}`} type="checkbox" defaultChecked={data.check === 'checked'} />
                                <div className="custom--mega-checkbox">
                                    <UL className="simple-list d-flex flex-column">
                                        <LI>{data.text}</LI>
                                        <LI className="txt-primary">{data.sales}</LI>
                                    </UL>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Col>
    )
}
