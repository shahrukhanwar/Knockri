import React from 'react';

const Loader = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 56px)',
    }}
  >
    <img src="/loader.gif" alt="loading" />
  </div>
);

export default Loader;
