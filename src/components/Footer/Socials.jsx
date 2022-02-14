import React from 'react'
import { ReactComponent as SocialFacebook } from '../../images/SocialFacebook.svg'
import { ReactComponent as SocialTwitter } from '../../images/SocialTwitter.svg'
import { ReactComponent as SocialTelegram } from '../../images/SocialTelegram.svg'
import { Col, NavLink, Row } from 'react-bootstrap'

const Socials = () => {
    return (
        <>
            <Row className='flex-row-reverse align-items-center mb-sm-4 mb-2 pb-sm-3'>
                <Col lg={3}>
                    <ul className='social text-lg-end mb-4 pb-2 pb-lg-0 mb-lg-0'>
                        <li><NavLink><SocialFacebook /></NavLink></li>
                        <li><NavLink><SocialTwitter /></NavLink></li>
                        <li><NavLink><SocialTelegram /></NavLink></li>
                    </ul>
                </Col>
                <Col lg={9}>
                    <ul className='footer-nav'>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Terms & Conditions</NavLink></li>
                        <li><NavLink>Privacy Policy</NavLink></li>
                        <li><NavLink>White Paper</NavLink></li>
                        <li><NavLink>Blog</NavLink></li>
                    </ul>
                </Col>
            </Row>
        </>
    )
}

export default Socials