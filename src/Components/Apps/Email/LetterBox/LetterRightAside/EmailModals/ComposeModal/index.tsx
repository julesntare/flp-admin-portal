import React, { useState } from 'react'
import { Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import SimpleMdeReact from 'react-simplemde-editor';
import { RootState } from '../../../../../../../redux-toolkit/store';
import { Btn } from '../../../../../../../AbstractElements'
import ToggleComponent from './ToggleComponent';
import { ComposeMessage, SaveDraft, Send } from '../../../../../../../Utils/Constants';
import { AddNewEmailInterFace } from '../../../../../../../Types/EmailType';
import { addNewEmail, setComposeEmail, setEmailValidation } from '../../../../../../../redux-toolkit/reducers/LetterBoxReducer';

export default function ComposeModal() {
    const [ccShow,setCcShow] = useState(false);
  const [bccShow,setBccShow] = useState(false)
  const {composeEmail,emailValidation} = useSelector((state: RootState)=>state.email)
  const dispatch = useDispatch();
  const {register,handleSubmit,formState: { errors },reset} = useForm<AddNewEmailInterFace>();
  const onSubmit:SubmitHandler<AddNewEmailInterFace> = (data) => {
    dispatch(addNewEmail(data));
    dispatch(setEmailValidation(false));
    dispatch(setComposeEmail(false));
    reset();
  };
  return (
    <Modal isOpen={composeEmail} className={`${composeEmail ? "show" : ""}`} size="lg"  id="compose_mail" >
      <ModalHeader toggle={()=>dispatch(setComposeEmail(false))}> {ComposeMessage} </ModalHeader>
      <ModalBody className="compose-modal">
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Row>
              <Col sm={2}>
                <Label className="col-form-label" for="composeFrom" check >{'From'} :</Label>
              </Col>
              <Col sm={10}>
                <Input id="composeFrom" type="email"/>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm={2}>
                <Label className="col-form-label" for="composeTo" check>{'To'} :</Label>
              </Col>
              <Col sm={10}>
                <input className={`form-control ${emailValidation && `${errors.userEmail ? "is-invalid":"is-valid"}`}`} type="email" {...register("userEmail", { required: true })} autoComplete="off"/>
                <div className="add-bcc">
                  <div className="d-flex gap-2">
                    <Btn color="light" className='text-primary' onClick={()=>setCcShow(!ccShow)} > {'Cc'}</Btn>
                    <Btn color="light" className='text-primary' onClick={()=>setBccShow(!bccShow)}> {'Bcc'} </Btn>
                  </div>
                </div>
              </Col>
            </Row>
          </FormGroup>
          <ToggleComponent ccShow={ccShow} bccShow={bccShow} />
          <FormGroup>
            <Row>
              <Col sm={2}>
                <Label className="col-form-label" for="composeSubject" check >{'Subject'} :</Label>
              </Col>
              <Col sm={10}>
                <input className={`form-control ${emailValidation && `${errors.subject ? "is-invalid":"is-valid"}`}`} type="textarea" {...register("subject", { required: true })} autoComplete="off"/>
              </Col>
            </Row>
          </FormGroup>
          <div className="toolbar-box">
            <div id="editor">
              <SimpleMdeReact id="editor_container" placeholder={'Enter Your Messages'} options={{ autofocus: true, spellChecker: false }} />
            </div>
          </div>
          <ModalFooter>
            <Btn color="light" onClick={()=>dispatch(setComposeEmail(false))}>{SaveDraft}</Btn>
            <Btn color="primary" type="submit" onClick={()=>dispatch(setEmailValidation(true))}> {Send} </Btn>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
};

