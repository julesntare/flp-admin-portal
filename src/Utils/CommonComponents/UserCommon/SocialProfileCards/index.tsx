import React, { useEffect } from 'react'
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { SocialProfileType } from '../../../../Types/CommonComponentType';
import { H5, Image, LI, UL } from '../../../../AbstractElements';
import { dynamicImage } from '../../..';
import SvgIcon from '../../CommonIcons/CommonSvgIcons';
import { Followers, Following, Posts } from '../../../Constants';
import { fetchUsersData } from '../../../../redux-toolkit/reducers/UsersReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux-toolkit/store';
import { socialCardLinkList } from '../../../../Data/AppsData/SocialAppData';

export default function SocialProfileCards({ colClass }: SocialProfileType) {
    const { allUsers } = useSelector((state: RootState) => state.userCards);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => { dispatch(fetchUsersData()); }, []);

    return (
        <>
            {allUsers.map((item) => (
                <div className={colClass} key={item.id}>
                    <Card className="social-profile">
                        <CardBody>
                            <div className="social-img-wrap">
                                <div className="social-img"><Image src={dynamicImage(item.avatar)} alt="profile" /></div>
                                <div className="edit-icon"><SvgIcon iconId='profile-check' /></div>
                            </div>
                            <div className="social-details">
                                <H5 className="mb-1">
                                    <Link to={`${process.env.PUBLIC_URL}/applications/social-app`}>{item.name}</Link>
                                </H5>
                                <span className="f-light">{item.email}</span>
                                <UL className="card-social simple-list flex-row">
                                    {socialCardLinkList.map((item) => (
                                        <LI key={item.id}>
                                            <a href={item.link} target="_blank"><i className={`fa fa-${item.icon}`}></i></a>
                                        </LI>
                                    ))}
                                </UL>
                                <UL className="social-follow simple-list flex-row justify-content-center">
                                    <LI><H5 className="mb-0">{item.totalPost}</H5><span className="f-light">{Posts}</span></LI>
                                    <LI><H5 className="mb-0">{item.follower}</H5><span className="f-light">{Followers}</span></LI>
                                    <LI><H5 className="mb-0">{item.following}</H5><span className="f-light">{Following}</span></LI>
                                </UL>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </>
    )
}
