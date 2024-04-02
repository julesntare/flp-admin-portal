import React, { useEffect, useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import { JobSearchApi } from '../../../../../api';
import { CardsDataType, RightSidebarCardsProps } from '../../../../../Types/MiscellaneousType';
import { Badges, H6, Image, P, Ribbon } from '../../../../../AbstractElements';
import { Href } from '../../../../../Utils/Constants';
import PaginationCard from './Pagination';
import { dynamicImage } from '../../../../../Utils';

export default function RightSidebarCards({ limit, colClass }: RightSidebarCardsProps) {
    const [cardsData, setCardsData] = useState([]);
    const getApi = async () => {
        const res = await fetch(JobSearchApi);
        const finalResult = await res.json();
        setCardsData(finalResult);
    };
    useEffect(() => { getApi(); }, []);
    return (
        <>
            {cardsData.length > 0 &&
                cardsData.slice(0, limit).map((item: CardsDataType, i) => (
                    <div className={colClass} key={i}>
                        <Card className={item.ribbon ? "ribbon-vertical-left-wrapper" : ""}>
                            {item.ribbon && (
                                <Ribbon className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary">
                                    <i className="icofont icofont-love"></i>
                                </Ribbon>
                            )}
                            <div className="job-search">
                                <CardBody>
                                    <div className="d-flex">
                                        <Image className="img-40 img-fluid m-r-20" src={dynamicImage(item.logo)} alt="" />
                                        <div className="flex-grow-1">
                                            <H6 className="f-w-600">
                                                <a href={Href}>{item.job_name}</a>
                                                {item.badgeValue ?
                                                    (
                                                        <Badges color="primary" className="pull-right">
                                                            {item.type}
                                                        </Badges>
                                                    ) :
                                                    (<span className="pull-right">{item.type}</span>)
                                                }
                                            </H6>
                                            <P>{item.job_area}, {item.job_city}
                                                <span className='ms-2'><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i></span>
                                            </P>
                                        </div>
                                    </div>
                                    <P>{item.Job_description}</P>
                                </CardBody>
                            </div>
                        </Card>
                    </div>
                ))}
            <PaginationCard />
        </>
    )
}
