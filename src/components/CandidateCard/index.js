import React from 'react';
import { withRouter } from 'react-router-dom';

const CandidateCard = ({ name, applicationId, history }) => {
  // function to handle redirect or alert
  const handleClick = () => {
    applicationId
      ? history.push(`/${applicationId}`)
      : alert('Application not found');
  };

  return (
    <div
      className="card mb-3"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
};

export default withRouter(CandidateCard);
