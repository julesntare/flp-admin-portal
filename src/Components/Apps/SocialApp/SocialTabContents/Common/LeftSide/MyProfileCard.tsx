import React from 'react'
import CommonCard from '../CommonCard';
import { CardBody } from 'reactstrap';
import { Badges, Btn, H3, H5, Image, LI, UL } from '../../../../../../AbstractElements';
import { Likes, Messages, MyPage, MyProfileTitle, NewLikesThisWeek, Notification, View } from '../../../../../../Utils/Constants';
import { dynamicImage } from '../../../../../../Utils';

export default function MyProfileCard() {
    const imageList = [3, 5, 1, 2, 8, 10];
    return (
        <CommonCard title={MyProfileTitle}>
            <CardBody className="socialprofile filter-cards-view">
                <div className="d-flex"><Image className="img-50 img-fluid m-r-20 rounded-circle" src={dynamicImage(`user/1.jpg`)} alt="" />
                    <div className="flex-grow-1">
                        <H3 className="font-primary f-w-600">{MyPage}</H3>
                        <span className="d-block"><span><i className="fa fa-comments-o"> </i><span className="px-2">{Messages}<Badges color='light' className="rounded-pill ms-2">{'9'}</Badges></span></span></span>
                        <span className="d-block"><span><i className="fa fa-bell-o"> </i><span className="px-2">{Notification}<Badges color='light' className="rounded-pill ms-2">{'9'}</Badges></span></span></span>
                    </div>
                </div>
                <div className="social-btngroup d-flex">
                    <Btn color='primary' className="text-center">{Likes}</Btn>
                    <Btn color='light' className="text-center ms-2">{View}</Btn>
                </div>
                <div className="likes-profile text-center">
                    <H5> <span> <i className="fa fa-heart font-danger"></i> {'884'}</span></H5>
                </div>
                <div className="text-center">{NewLikesThisWeek}</div>
                <div className="customers text-center social-group">
                    <UL className='simple-list flex-row'>
                        {imageList.map((list, i) => (
                            <LI className="d-inline-block" key={i}>
                                <Image className="img-40 rounded-circle" src={dynamicImage(`user/${list}.jpg`)} alt="" body={true} />
                            </LI>
                        ))}
                    </UL>
                </div>
                <Image className="img-fluid mt-5" alt="" src={dynamicImage(`social-app/timeline-3.png`)} />
            </CardBody>
        </CommonCard>
    )
}
