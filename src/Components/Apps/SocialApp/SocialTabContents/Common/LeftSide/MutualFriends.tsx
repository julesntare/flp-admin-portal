import React from 'react'
import { CardBody } from 'reactstrap'
import CommonCard from '../CommonCard'
import { MutualFriendsTitle } from '../../../../../../Utils/Constants'
import { Image } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'
import { mutualFriendsData } from '../../../../../../Data/AppsData/SocialAppData'

export default function MutualFriends() {
    return (
        <CommonCard title={MutualFriendsTitle}>
            <CardBody className="social-status filter-cards-view">
                {mutualFriendsData.map((data) => (
                    <div className="d-flex" key={data.id}>
                        <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/${data.image}`)} alt="" body={true} />
                        <div className={`social-status ${data.status}`}></div>
                        <div className="flex-grow-1">
                            <span className="d-block">{data.name}</span>
                            <span className="d-block">{data.email}</span>
                        </div>
                    </div>
                ))}
            </CardBody>
        </CommonCard>
    )
}
