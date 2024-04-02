import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { CopyFromParagraph, CopyHighlightedText, CopyPortionParagraphTitle, CopyFormText } from '../../../../../Utils/Constants';
import { Btn, H6, P } from '../../../../../AbstractElements';

export default function CopyPortionFromParagraph() {
    const copyPortionParagraphText: string = "that are visible online. Take a website design course to learn how to  create an appealing and responsive website. In the discipline of web design, there are degree, diploma, postgraduate degree, and certificate programmes. A web designer is responsible for a website's look, feel, and occasionally even content.";
    return (
        <Col sm={12} md={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={CopyPortionParagraphTitle} />
                <CardBody>
                    <div className="clipboaard-container">
                        <P className="f-16">{CopyFromParagraph}</P>
                        <H6 className="border rounded card-body f-w-300">
                            <span className="bg-primary text-white p-1">{CopyFormText}</span>{copyPortionParagraphText}
                        </H6>
                        <div className="mt-3 text-end">
                            <CopyToClipboard text={CopyFormText} onCopy={() => toast.info("text successfully copied")}>
                                <Btn className="btn-clipboard" color="secondary"><i className="fa fa-copy"></i> {CopyHighlightedText}</Btn>
                            </CopyToClipboard>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
