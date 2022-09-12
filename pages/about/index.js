import React from 'react';
import { useRouter } from 'next/router';

const AboutPage = () => {
    const router = useRouter();
    // console.log(router);

    return (
        <div>
            AboutPage
            <button onClick={() => router.push('/')}>NAVIGATE TO HOME</button>
        </div>
    );
};

export default AboutPage;
