import React from 'react'
import { H3, H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { Comment, Hits, MarkJecno } from '../../../../Utils/Constants'
import CommentSection from './CommentSection'
import { blogSingleData } from '../../../../Data/MiscellaneousData/BlogData'
import { dynamicImage } from '../../../../Utils'

export default function BlogBoxSingle() {
    return (
        <div className="blog-single">
            <div className="blog-box blog-details">
                <Image className="img-fluid w-100" src={dynamicImage(`blog/blog-single.jpg`)} alt="blog-main" />
                <div className="blog-details">
                    <UL className="simple-list flex-row blog-social">
                        <LI>{'25 July 2023'}</LI>
                        <LI><i className="icofont icofont-user"></i><span>{MarkJecno}</span></LI>
                        <LI><i className="icofont icofont-thumbs-up"></i>{'02 '}<span>{Hits}</span></LI>
                        <LI><i className="icofont icofont-ui-chat"></i>{'598 Comments'}</LI>
                    </UL>
                    <H4 className="mt-3">{'The Harpeth rises in the westernmost part of Rutherford County, just to the east of the community of College Grove in eastern Williamson County. Internet.'}</H4>
                    <div className="single-blog-content-top">
                        <P>{'From the east coast to the west, each river has its own beauty and character. Each river has its own story. Take a look at some America’s best rivers and some of the rivers we’re working to protect. And learn some facts about your favorite rivers. The Harpeth River and its tributaries are home to rich freshwater biodiversity, including more than 50 species of fish and 30 species of mussels'}</P>
                        <P>{'The Harpeth River flows through the heart of downtown Franklin, the 14th fastest growing city in the United States, and traverses Williamson County, one of the fastest growing counties in Tennessee. This rapid development has already caused harm to the river from adding treated sewage, increasing stormwater runoff, and withdrawing water.The river’s impairment is caused by dangerously low levels of dissolved oxygen driven by high concentrations of nutrients – particularly phosphorus – that fuel oxygen-hungry algal blooms that can lead to toxic conditions.'}</P>
                    </div>
                </div>
            </div>
            <section className="comment-box">
                <H3>{Comment}</H3>
                <hr />
                <UL className='simple-list'>
                    {blogSingleData.map((item) => (
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
    )
}
