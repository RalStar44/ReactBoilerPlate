import React, { useEffect } from 'react';

const withTitle = (WrappedTitleComponent, title) => {
  const WithTitle = (props) => {
    useEffect(() => {
      document.title = title;
    }, [title]);

    return <WrappedTitleComponent {...props} />;
  };

  return WithTitle;
};

export default React.memo(withTitle);
