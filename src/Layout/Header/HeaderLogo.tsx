import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { Image } from '../../AbstractElements'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux-toolkit/store'
import { setSideBarToggle } from '../../redux-toolkit/reducers/LayoutReducer'
import SvgIcon from '../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { dynamicImage } from '../../Utils'

export default function HeaderLogo() {
    const { sideBarToggle } = useSelector((state: RootState) => state.layout);
    const dispatch = useDispatch()
    const toggleGrid = () => {
        dispatch(setSideBarToggle(!sideBarToggle))
    }
    return (
        <Col xs='auto' className="header-logo-wrapper p-0">
            <div className="logo-wrapper">
                <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                    <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="" />
                    <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo.png`)} alt="" />
                </Link>
            </div>
            <div className="toggle-sidebar">
                <SvgIcon className='sidebar-toggle middle' iconId='stroke-animation' onClick={toggleGrid} />
            </div>
        </Col>
    )
}
