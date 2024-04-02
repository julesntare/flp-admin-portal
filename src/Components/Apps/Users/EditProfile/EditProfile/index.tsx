import React from 'react'
import { Card, CardBody, CardFooter, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { AboutMe, Address, City, Company, Country, EditProfileTitle, EmailAddress, FirstName, LastName, PostalCode, UpdateProfile, Username } from '../../../../../Utils/Constants';
import { Btn } from '../../../../../AbstractElements';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { usersCountryList } from '../../../../../Data/AppsData/UsersData';

export default function EditProfile() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onEditSubmit = () => {
        alert('Form is Submitted successfully');
    };
    return (
        <Col xl={8}>
            <Card>
                <Form onSubmit={handleSubmit(onEditSubmit)}>
                    <CommonCardHeader headClass='pb-0' titleClass='card-title' title={EditProfileTitle} />
                    <CardBody>
                        <Row>
                            <Col md={5}>
                                <FormGroup>
                                    <Label>{Company}</Label>
                                    <input className="form-control" type="text" placeholder="Company" {...register('company', { required: true })} /><span style={{ color: 'red' }}>{errors.company && 'Company is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={3}>
                                <FormGroup>
                                    <Label>{Username}</Label>
                                    <input className="form-control" type="text" placeholder="Username" {...register('username', { required: true })} /><span style={{ color: 'red' }}>{errors.username && 'Username is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={4}>
                                <FormGroup>
                                    <Label>{EmailAddress}</Label>
                                    <input className="form-control" type="email" placeholder="Email" {...register('emailAddress', { required: true })} /><span style={{ color: 'red' }}>{errors.emailAddress && 'EmailAddress is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>{FirstName}</Label>
                                    <input className="form-control" type="text" placeholder="Company" {...register('firstName', { required: true })} /><span style={{ color: 'red' }}>{errors.firstName && 'FirstName is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>{LastName}</Label>
                                    <input className="form-control" type="text" placeholder="Last Name" {...register('lastName', { required: true })} /><span style={{ color: 'red' }}>{errors.lastName && 'LastName is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label>{Address}</Label>
                                    <input className="form-control" type="text" placeholder="Home Address" {...register('address', { required: true })} /><span style={{ color: 'red' }}>{errors.address && 'Address is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={4}>
                                <FormGroup>
                                    <Label>{City}</Label>
                                    <input className="form-control" type="text" placeholder="City" {...register('city', { required: true })} /><span style={{ color: 'red' }}>{errors.city && 'City is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={3}>
                                <FormGroup>
                                    <Label>{PostalCode}</Label>
                                    <input className="form-control" type="number" placeholder="ZIP Code" {...register('postalCode', { required: true })} /><span style={{ color: 'red' }}>{errors.postalCode && 'Zip code is required'} </span>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label>{Country}</Label>
                                    <Input type="select" className=" btn-square">
                                        {usersCountryList.map((items, i) => <option key={i}>{items}</option>)}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <div>
                                    <Label>{AboutMe}</Label>
                                    <Input type="textarea" rows="4" placeholder="Enter About your description" />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter className="text-end"> <Btn color='primary'>{UpdateProfile}</Btn> </CardFooter>
                </Form>
            </Card>
        </Col>
    )
}
