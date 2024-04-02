import React, { useState } from 'react'
import { Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Btn, H3, P } from '../../../../../AbstractElements'
import { EmailAddress, ForgotPassword, Password, RememberPassword, SignIn, SignInAccount } from '../../../../../Utils/Constants'
import SocialLinks from './SocialLinks'
import { LoginFormProp } from '../../../../../Types/OtherPagesType'
import CommonLogo from './CommonLogo'

export default function LoginForm({ logoClass }: LoginFormProp) {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const toggle = () => setPasswordVisible(!isPasswordVisible);
    const [formData, setFormData] = useState({ email: '', password: '', checkbox1: false, });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({ email: '', password: '', checkbox1: false, });
    };
    return (
        <div>
            <div>
                <CommonLogo logoClass={logoClass}/>
            </div>
            <div className="login-main">
                <Form className="theme-form" onSubmit={handleSubmit}>
                    <H3>{SignInAccount}</H3>
                    <P>{"Enter your email & password to login"}</P>
                    <FormGroup>
                        <Col><Label>{EmailAddress}</Label></Col>
                        <Input type="email" required placeholder="Test@gmail.com" id="email" value={formData.email} onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Col><Label>{Password}</Label></Col>
                        <div className="form-input position-relative">
                            <Input type={isPasswordVisible ? 'text' : 'password'} name="login[password]" required placeholder="*********" id="password" value={formData.password} onChange={handleInputChange} />
                            <div className='show-hide' onClick={toggle}>
                                <span className={!isPasswordVisible ? 'show' : ''}></span>
                            </div>
                        </div>
                    </FormGroup>
                    <div className="mb-0 form-group">
                        <div className="checkbox p-0">
                            <Input id="checkbox1" type="checkbox" checked={formData.checkbox1} onChange={handleInputChange} />
                            <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                        </div>
                        <Link className="link" to={`${process.env.PUBLIC_URL}/auth/forget-password`}>{ForgotPassword}</Link>
                        <div className="text-end mt-3">
                            <Btn color='primary' className="btn-block w-100">{SignIn}</Btn>
                        </div>
                    </div>
                    <SocialLinks />
                </Form>
            </div>
        </div>
    )
}
