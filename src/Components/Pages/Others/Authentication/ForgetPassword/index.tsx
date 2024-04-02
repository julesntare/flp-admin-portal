import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, H6, P } from "../../../../../AbstractElements";
import { CreateYourPassword, Done, EnterOtp, EnterYourMobileNumber, Href, NewPassword, RememberPassword, Resend, ResetYourPassword, RetypePassword, Send, SignIn } from "../../../../../Utils/Constants";
import CommonLogo from "../Common/CommonLogo";

export default function ForgetPassword() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const toggle = () => setPasswordVisible(!isPasswordVisible);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div className="page-wrapper">
            <Container fluid className="p-0">
                <Row>
                    <Col xs={12}>
                        <div className="login-card login-dark">
                            <div>
                                <div><CommonLogo /></div>
                                <div className="login-main">
                                    <Form className="theme-form" onSubmit={handleSubmit}>
                                        <H4>{ResetYourPassword}</H4>
                                        <FormGroup>
                                            <Col><Label>{EnterYourMobileNumber}</Label></Col>
                                            <Row>
                                                <Col xs={4} sm={3}><Input className="mb-1" type="text" defaultValue="+ 91" /></Col>
                                                <Col xs={8} sm={9}><Input className="mb-1" type="tel" defaultValue="000-000-0000" /></Col>
                                                <Col xs={12}>
                                                    <div className="text-end">
                                                        <Btn color='primary' className="btn-block m-t-10">{Send}</Btn>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <div className="mt-4 mb-4"><span className="reset-password-link">{"If don't receive OTP?"}
                                            <a className="btn-link text-danger" href={Href}>{Resend}</a></span>
                                        </div>
                                        <FormGroup>
                                            <Col><Label className="pt-0">{EnterOtp}</Label></Col>
                                            <Row>
                                                <Col><Input className="text-center opt-text" type="text" defaultValue="00" maxLength={2} /></Col>
                                                <Col><Input className="text-center opt-text" type="text" defaultValue="00" maxLength={2} /></Col>
                                                <Col><Input className="text-center opt-text" type="text" defaultValue="00" maxLength={2} /></Col>
                                            </Row>
                                        </FormGroup>
                                        <H6 className="mt-4">{CreateYourPassword}</H6>
                                        <FormGroup>
                                            <Col><Label>{NewPassword}</Label></Col>
                                            <div className="form-input position-relative">
                                                <Input type={isPasswordVisible ? 'text' : 'password'} id="password" name="login[password]" required placeholder="*********" />
                                                <div className='show-hide' onClick={toggle}>
                                                    <span className={!isPasswordVisible ? 'show' : ''}></span>
                                                </div>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Col><Label>{RetypePassword}</Label></Col>
                                            <Input type={isPasswordVisible ? 'text' : 'password'} id="password" name="login[password]" required placeholder="*********" />
                                            <div className='show-hide' onClick={toggle}></div>
                                        </FormGroup>
                                        <FormGroup className="mb-0">
                                            <div className="checkbox p-0">
                                                <input id="checkbox1" type="checkbox" />
                                                <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                                            </div>
                                            <Btn color='primary' className="btn-block w-100">{Done}</Btn>
                                        </FormGroup>
                                        <P className="mt-4 mb-0 text-center">{"Already have an account?"}
                                            <Link to={`${process.env.PUBLIC_URL}/auth/login`} className='ms-2'>{SignIn}</Link>
                                        </P>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}