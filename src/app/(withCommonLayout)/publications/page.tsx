
import PubCards, { Publication } from '@/components/Interface/common/PubCard';
import Container from '@/components/Shared/Container';
import { getAllPublications } from '@/services/actions/publication';
import React from 'react';

const page = async () => {

    const res: Publication[] = await getAllPublications();

    console.log(res, "Asdf");

    return (
        <Container>
            <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2'>
                {
                    res.map((publication, index) => (
                        <PubCards key={index} publication={publication} />
                    ))
                }

            </div>
        </Container>
    );
};

export default page;
