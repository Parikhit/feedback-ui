import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../shared/Card';

const AboutPage = () => {
    return (
        <Card>
            <div
                className='about'
                style={{
                    display: 'grid',
                    justifyContent: 'center',
                }}
            >
                <h1>About this Project</h1>
                <p>This is a React App to leave Feedback for a product or service.</p>
                <p>Version: 1.0.0</p>
                <h6>
                    &copy; 2022 All Rights Reserved <br /> A project by Parikhit Baruah
                </h6>
                <p>
                    <Link to='/'>Back to Home</Link>
                </p>
            </div>
        </Card>
    );
};

export default AboutPage;
