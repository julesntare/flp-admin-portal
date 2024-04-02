import React from 'react'
import CommonLogo from '../Common/CommonLogo'
import { RegisterWizardProp } from '../../../../../Types/OtherPagesType'
import { H4, H5, Image, LI, UL } from '../../../../../AbstractElements'
import { stepperHorizontalData } from '../../../../../Data/PagesData/OtherPagesData'
import { dynamicImage } from '../../../../../Utils'

export default function RegisterWizardList({ level }: RegisterWizardProp) {
    return (
        <UL className="simple-list anchor">
            <LI><CommonLogo logoClass='text-start ps-0' /></LI>
            {stepperHorizontalData.map((data) => (
                <LI key={data.id}>
                    <a href={`#form-${data.id}`} className={`${level === data.id ? "selected" : level > data.id ? "done" : "disabled"}`} >
                        <H4>{data.id}</H4>
                        <H5>
                            {data.title}
                            {data.title === "Done" ? (<i className="fa fa-thumbs-o-up" />) : (" ")}
                        </H5>
                        <small>{data.detail}</small>
                    </a>
                </LI>
            ))}
            <LI>
                <Image src={dynamicImage(`login/icon.png`)} alt="looginpage" />
            </LI>
        </UL>
    )
}
