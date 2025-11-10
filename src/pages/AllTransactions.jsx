import React from 'react';
import { useLoaderData } from 'react-router';

const AllTransactions = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            All Transactions
        </div>
    );
};

export default AllTransactions;