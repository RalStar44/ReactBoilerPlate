import React, { useEffect } from 'react';

const withLogging = (WrappedComponent) => {
  const WithLogging = (props) => {
    useEffect(() => {
      console.log('Component is mounted');

      return () => {
        console.log('Component is unmounted');
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithLogging;
};

export default withLogging;
