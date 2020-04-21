import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CommentComponent from '../CommentComponent';

const VideoComponent = ({ id, video, setApplication, application }) => {
  const { questionId, src, comments } = video;

  const [question, setQuestion] = useState(null);

  const getQuestion = async () => {
    const response = await axios.get(
      `http://localhost:3010/questions/${video.questionId}`
    );

    response.data && setQuestion(response.data);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      {question ? (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{question.question}</h5>
            <video src={src} style={{ width: '100%' }} controls />
            {comments ? (
              <p className="blockquote-footer mt-2">{comments}</p>
            ) : (
              <CommentComponent
                questionId={questionId}
                application={application}
                setApplication={setApplication}
              />
            )}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default VideoComponent;
