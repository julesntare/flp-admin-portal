import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import { Finish, Href, Loading, Next, Previous } from '../../../../../Utils/Constants';
import RegisterWizardList from './RegisterWizardList';
import { Btn } from '../../../../../AbstractElements';
import PersonalForm from './PersonalForm';
import AddressForm from './AddressForm';
import MessageForm from './MessageForm';
import DoneForm from './DoneForm';

export default function RegisterWizard() {
    const [level, setLevel] = useState(1);
    const [formValue, setFormValue] = useState({ firstName: "", lastName: "", contactNumber: "", email: "", password: "", confirmPassword: "", birthDate: "", age: "", passPort: "", country: "", state: "", city: "", });
    const [showFinish, setShowFinish] = useState(false);
    const handleBackButton = () => {
        setShowFinish(false);
        if (level === 2) { setLevel(level - 1); }
        if (level === 3) { setLevel(level - 1); }
        if (level === 4) { setLevel(level - 1); }
    };
    const updateUserData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        setFormValue({ ...formValue, [name]: value });
    };
    const handleNextButton = () => {
        const { firstName, lastName, contactNumber, email, password, confirmPassword, birthDate, age, passPort, country, state, city } = formValue;
        if (firstName !== "" && lastName !== "" && contactNumber !== "" && level === 1) {
            setLevel(level + 1);
        } else if (email !== "" && password !== "" && confirmPassword !== "" && level === 2) {
            setLevel(level + 1);
        } else if (birthDate !== "" && age !== "" && passPort !== "" && level === 3) {
            setLevel(level + 1);
        } else if (country !== "" && state !== "" && city !== "" && level === 4) {
            setShowFinish(true);
        } else {
            return toast.error("please fill all fields before jumping to next button");
        }
    };
    const handleFinish = () => {
        toast.success("Congratulation ! All step Done.")
    }
    return (
        <Container fluid>
            <Row>
                <Col xs={12} className="p-0">
                    <div>
                        <div className="theme-form">
                            <div className="wizard-4">
                                <RegisterWizardList level={level} />
                                <div className="step-container login-card">
                                    {level === 1 && (<PersonalForm formValue={formValue} updateUserData={updateUserData} />)}
                                    {level === 2 && (<AddressForm formValue={formValue} updateUserData={updateUserData} />)}
                                    {level === 3 && (<MessageForm formValue={formValue} updateUserData={updateUserData} />)}
                                    {level === 4 && (<DoneForm formValue={formValue} updateUserData={updateUserData} />)}
                                </div>
                                <div className="action-bar">
                                    <div className="loader">{Loading}</div>
                                    {level === 4 && (<Btn color='primary' onClick={handleFinish}>{Finish}</Btn>)}
                                    {level !== 5 && (<Btn color='primary' onClick={handleNextButton} className={`${showFinish ? "buttonDisabled" : ""}`}>{Next}</Btn>)}
                                    {level > 1 && (<Btn color='primary' onClick={handleBackButton}>{Previous}</Btn>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};