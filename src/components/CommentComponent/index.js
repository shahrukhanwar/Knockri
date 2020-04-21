import React, { useState } from 'react';
import axios from 'axios';

const CommentComponent = ({ application, setApplication, questionId }) => {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  // submit comment and update state
  const onSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      videos: application.videos.map((video) =>
        video.questionId === questionId
          ? {
              ...video,
              comments: input,
            }
          : video
      ),
    };

    const response = await axios.patch(
      `http://localhost:3010/applications/${application.id}`,
      postData
    );

    response.data && setApplication(response.data);
  };

  return (
    <form onSubmit={onSubmit} className="my-2">
      <textarea className="form-control" onChange={onChange} value={input} />
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
};

export default CommentComponent;
