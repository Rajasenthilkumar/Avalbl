import React from 'react';
import { useNavigate } from 'react-router-dom';

const withRouter = (WrappedComponent) => {
  const WithRouterWrapper = (props) => {
    const navigate = useNavigate();
    return <WrappedComponent {...props} navigate={navigate} />;
  };

  WithRouterWrapper.displayName = `WithRouter(${getDisplayName(WrappedComponent)})`;

  return WithRouterWrapper;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withRouter;
