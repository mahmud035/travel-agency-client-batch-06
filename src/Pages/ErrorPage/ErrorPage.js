import React from 'react';
import { useRouteError } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      {error && (
        <div className="error-page">
          <h1>Oops!</h1>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
