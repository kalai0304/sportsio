import React from 'react'
import BreadCromp from '../components/BreadCromp';
import Meta from '../components/Meta';
import Container from '../components/Container';
const PrivacyPolicy = () => {
    return (
        <>
            <Meta title="Privacy Policy" />
            <BreadCromp title='Privacy Policy' />
            <Container class1='policy-wrapper home-wrapper-2 py-5'>
                    <div className='row'>
                        <div className='policy'></div>
                    </div>
            </Container>
        </>
    )
}

export default PrivacyPolicy