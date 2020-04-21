import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header';
import CandidateCard from '../CandidateCard';
import Loader from '../Loader';

const CandidateList = () => {
  const [candidates, setCandidates] = useState(null);

  // get all candidates
  const getCandidates = async () => {
    const response = await axios.get('http://localhost:3010/candidates');

    response.data && setCandidates(response.data);
  };

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <>
      <Header />
      {candidates ? (
        <div className="card-deck m-4">
          {candidates.map(({ id, ...otherprops }) => (
            <CandidateCard key={id} {...otherprops} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CandidateList;
