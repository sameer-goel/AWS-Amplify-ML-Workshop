import Spinner from "react-bootstrap/Spinner";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
    </div>
  );
};

export default LoadingSpinner;
