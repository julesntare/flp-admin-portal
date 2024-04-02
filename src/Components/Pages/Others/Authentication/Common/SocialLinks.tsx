import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { H6, P } from '../../../../../AbstractElements'
import FeatherIconCom from '../../../../../Utils/CommonComponents/CommonIcons/FeatherIconCom'
import { CreateAccount, FacebookLink, LinkedIn, SignInWith, TwitterLink } from '../../../../../Utils/Constants'
import { SocialLinksProp } from '../../../../../Types/OtherPagesType'

export default function SocialLinks({ logtext, btntext }: SocialLinksProp) {
  return (
    <Fragment>
      <H6 className="text-muted mt-4 or">{SignInWith}</H6>
      <div className="social mt-4">
        <div className="btn-showcase">
          <Link to="https://www.linkedin.com/login" className='btn btn-light me-1' target='_blank'>
            <FeatherIconCom className='txt-linkedin' iconName='Linkedin' />
            {LinkedIn}
          </Link>
          <Link to="https://twitter.com/login?lang=en" className='btn btn-light m-0' target='_blank'>
            <FeatherIconCom className='txt-twitter' iconName='Twitter' />
            {TwitterLink}
          </Link>
          <Link to="https://www.facebook.com/" className='btn btn-light' target='_blank'>
            <FeatherIconCom className='txt-fb' iconName='Facebook' />
            {FacebookLink}
          </Link>
        </div>
      </div>
      <P className="mt-4 mb-0 text-center">
        {logtext ? logtext : "Don't have account?"}
        {!logtext && !btntext ? (
          <Link className="ms-2" to={`${process.env.PUBLIC_URL}/auth/sign-up`}>{CreateAccount}</Link>
        ) : (
          <Link to={`${process.env.PUBLIC_URL}/auth/login`} className='ms-2'>{btntext}</Link>
        )}
      </P>
    </Fragment>
  )
}
