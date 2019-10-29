import React from 'react';
import { useParams } from 'react-router-dom';

function Parameters() {
  let { experimentType } = useParams();
  return (
    <div className="content">
      <h4 className="text-dark text-center">Parameters</h4>
    </div>
  );
}

export default Parameters;