import React from 'react';
import { useLoaderData } from 'react-router';
import Cards from './Cards';

const AllTransactions = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-20'>
            {
                data.map((card, ind) => <Cards card={card} key={ind}/>)
            }
        </div>
    );
};

export default AllTransactions;