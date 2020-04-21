import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header';
import VideoComponent from '../VideoComponent';
import Loader from '../Loader';

const CandidateDetails = ({
  match: {
    params: { id },
  },
}) => {
  const [application, setApplication] = useState(null);

  // fetch application by id
  const getApplication = async () => {
    const response = await axios.get(
      `http://localhost:3010/applications/${id}`
    );

    response.data && setApplication(response.data);
  };

  useEffect(() => {
    getApplication();
  }, []);

  return (
    <>
      <Header />

      {application ? (
        <div className="row m-4">
          {application.videos.map((video) => (
            <VideoComponent
              key={video.questionId}
              video={video}
              id={application.id}
              application={application}
              setApplication={setApplication}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CandidateDetails;
