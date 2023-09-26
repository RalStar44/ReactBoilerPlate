// featureTitle.js 

import React, { useEffect } from 'react';
import configs from '../../config';

/**
 * Higher Order Component (HOC) that sets the document title based on the app configuration.
 * @param {React.Component} WrappedTitleComponent - The component to be wrapped.
 * @returns {React.Component} - The wrapped component with the updated document title.
 */
const featureTitle = (WrappedTitleComponent) => {
  /**
   * The wrapper component that sets the document title and renders the wrapped component.
   * @param {object} props - Props to be passed to the wrapped component.
   * @returns {React.Component} - The wrapped component with the updated document title.
   */
  const FeatureTitle = (props) => {
    /**
     * Use the `useEffect` hook to set the document title based on the app configuration.
     * The title is set only once after the component mounts.
     */
    useEffect(() => {
      document.title = configs.App.title;
    }, []);

    // Render the wrapped component with the updated document title.
    return <WrappedTitleComponent {...props} />;
  };

  return FeatureTitle;
};

export default React.memo(featureTitle);
