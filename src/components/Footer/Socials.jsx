import React from 'react'
import { ReactComponent as SocialFacebook } from '../../images/SocialFacebook.svg'
import { ReactComponent as SocialTwitter } from '../../images/SocialTwitter.svg'
import { ReactComponent as SocialTelegram } from '../../images/SocialTelegram.svg'
import { Col, NavLink, Row } from 'react-bootstrap'

const Socials = () => {
    return (
        <>
            <Row>
                <Col md={3}>
                    <ul>
                        <li><SocialFacebook /></li>
                        <li><SocialTwitter /></li>
                        <li><SocialTelegram /></li>
                    </ul>
                </Col>
                <Col md={3}>
                    <ul>
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