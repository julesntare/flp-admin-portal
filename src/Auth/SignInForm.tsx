import React, { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Btn, H3, H6, Image, P } from '../AbstractElements';
import { dynamicImage } from '../Utils';
import { Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { CreateAccount, DontHaveAccount, EmailAddress, FacebookLink, ForgotPassword, LinkedIn, Password, RememberPassword, SignIn, SignInAccount, SignInWith, TwitterLink } from '../Utils/Constants';
import FeatherIconCom from '../Utils/CommonComponents/CommonIcons/FeatherIconCom';

export default function SignInForm() {
    const navigate = useNavigate();
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("test123@gmail.com");
    const [password, setPassword] = useState("Test@123");

    const toggle = () => setPasswordVisible(!isPasswordVisible);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (email === "test123@gmail.com" && password === "Test@123") {
            toast.success("Login Success...!");
            navigate(`${process.env.PUBLIC_URL}/dashboard`);
            localStorage.setItem("login", JSON.stringify(true));
        } else {
            toast.error("Please Enter valid email or password...!");
        }
    };
    return (
        <div>
            <div>
                <Link className='logo' to={`${process.env.PUBLIC_URL}/dashboard`}>
                    <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="looginpage" body={true} />
                </Link>
            </div>
            <div className="login-main">
                <Form className="theme-form" onSubmit={handleSubmit}>
                    <H3>{SignInAccount}</H3>
                    <P>{"Enter your email & password to login"}</P>
                    <FormGroup>
                        <Col><Label>{EmailAddress}</Label></Col>
                        <Input type="email" defaultValue={email} onChange={(event) => setEmail(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Col><Label>{Password}</Label></Col>
                        <div className="form-input position-relative">
                            <Input type={isPasswordVisible ? 'text' : 'password'} defaultValue={password} onChange={(event) => setPassword(event.target.value)} name="login[password]" />
                            <div className='show-hide' onClick={toggle}>
                                <span className={!isPasswordVisible ? 'show' : ''}></span>
                            </div>
                        </div>
                    </FormGroup>
                    <div className="mb-0 form-group">
                        <div className="checkbox p-0">
                            <Input id="checkbox1" type="checkbox" />
                            <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                        </div>
                        <Link className="link" to={`${process.env.PUBLIC_URL}/auth/forget-password`}>{ForgotPassword}</Link>
                        <div className="text-end mt-3">
                            <Btn color='primary' className="btn-block w-100">{SignIn}</Btn>
                        </div>
                    </div>
                    <H6 className="text-muted mt-4 or">{SignInWith}</H6>
                    <div className="social mt-4">
                        <div className="btn-showcase">
                            <Link to="https://www.linkedin.com/login" className='btn btn-light me-1' target='_blank'>
                                <FeatherIconCom className='txt-linkedin' iconName='Linkedin' /> {LinkedIn}
                            </Link>
                            <Link to="https://twitter.com/login?lang=en" className='btn btn-light m-0' target='_blank'>
                                <FeatherIconCom className='txt-twitter' iconName='Twitter' /> {TwitterLink}
                            </Link>
                            <Link to="https://www.facebook.com/" className='btn btn-light' target='_blank'>
                                <FeatherIconCom className='txt-fb' iconName='Facebook' /> {FacebookLink}
                            </Link>
                        </div>
                    </div>
                    <P className="mt-4 mb-0 text-center">{DontHaveAccount}
                        <Link className="ms-2" to={`${process.env.PUBLIC_URL}/auth/sign-up`}>{CreateAccount}</Link>
                    </P>
                </Form>
            </div>
        </div >
    )
}
