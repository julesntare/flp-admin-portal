import React from 'react'
import CommentSection from './CommentSection'
import { Col } from 'reactstrap'
import { H3, H4, Image, LI, P, UL } from '../../../../../AbstractElements'
import { Comment} from '../../../../../Utils/Constants'
import { commentBoxData } from '../../../../../Data/MiscellaneousData/LearningData'
import { dynamicImage } from '../../../../../Utils'

export default function BlogDetails() {
    return (
        <Col xxl={9} xl={8} className="box-col-8">
            <div className="blog-single">
                <div className="blog-box blog-details">
                    <Image className="img-fluid w-100" src={dynamicImage(`faq/learning-1.png`)} alt="blog-main" />
                    <div className="blog-details">
                        <UL className="simple-list flex-row blog-social">
                            <LI>{'25 July 2023'}</LI>
                            <LI><i className="icofont icofont-user"></i><span>{'Mark Jecno'}</span></LI>
                            <LI><i className="icofont icofont-thumbs-up"></i>{'02 '}<span>{'Hits'}</span></LI>
                            <LI><i className="icofont icofont-ui-chat"></i>{'598 Comments'}</LI>
                        </UL>
                        <H4 className="mt-3">{'Knowledge can be defined as awareness of facts or as practical skills. there is wide agreement among philosophers that it is a form of true belief.Internet.'}</H4>
                        <div className="single-blog-content-top">
                            <P className="mt-3">{'Knowledge can be defined as awareness of facts or as practical skills, and may also refer to familiarity with objects or situations. Knowledge of facts, also called propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification. While there is wide agreement among philosophers that it is a form of true belief, many controversies in philosophy focus on justification: whether it is needed at all, how to understand it, and whether something else besides it is needed.'}</P>
                            <P>{"Knowledge can be produced in many different ways. The most important source is perception, which refers to the usage of the five senses. Many theorists also include introspection as a source of knowledge, not of external physical objects, but of one's own mental states. Other sources often discussed include memory, rational intuition, inference, and testimony. According to foundationalism, some of these sources are basic in the sense that they can justify beliefs without depending on other mental states. This claim is rejected by coherentists."}</P>
                        </div>
                    </div>
                </div>
                <section className="comment-box">
                    <H3>{Comment}</H3>
                    <hr />
                    <UL className='simple-list'>
                        {commentBoxData.map((item) => (
                            <LI key={item.id}>
                                {item.id !== 2 ? (
                                    <CommentSection item={item} colClass='col-md-4' socialComment={true} />
                                ) : (
                                    <UL>
                                        <LI><CommentSection item={item} colClass='col-xl-12' /></LI>
                                    </UL>
                                )}
                            </LI>
                        ))}
                    </UL>
                </section>
            </div>
        </Col>
    )
}
