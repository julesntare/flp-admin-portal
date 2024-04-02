import React from 'react'
import { CardBody } from 'reactstrap'
import CommonCard from '../CommonCard'
import { ActivityFeedTitle, Href, Photo } from '../../../../../../Utils/Constants'
import { activityFeedData } from '../../../../../../Data/AppsData/SocialAppData'
import { Image, P } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'

export default function ActivityFeed() {
    return (
        <CommonCard title={ActivityFeedTitle}>
            <CardBody className="social-status filter-cards-view">
                {activityFeedData.map((data) => (
                    <div className="d-flex" key={data.id}>
                        <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/${data.image}`)} alt="" />
                        <div className="flex-grow-1"><span className="d-block">{data.name}</span>
                            <P>{data.paragraph}<a href={Href}> {Photo}</a></P>
                            <span className="light-span">{data.time}</span>
                        </div>
                    </div>
                ))}
            </CardBody>
        </CommonCard>
    )
}
