import React from 'react';
import PubCards from '../../common/PubCars';
import Container from '@/components/Shared/Container';

const Publications = () => {
    return (

        <Container >
            <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 '>
                <PubCards></PubCards>
                <PubCards></PubCards>
                <PubCards></PubCards>
            </div></Container>
    );
};

export default Publications;