import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const AllTransactions = () => {
  //  const data = useLoaderData()
   const [data, setData] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:3000/collections")
      .then((res) => res.json())
      .then((info) => {
        setData(info); 
      })
      .catch((err) => console.error(err));
  }, [data]);
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-20'>
            {
                data.map((card, ind) => <Cards card={card} data={data} key={ind}/>)
            }
        </div>
    );
};

export default AllTransactions;