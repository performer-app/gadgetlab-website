import React from 'react';
import './Navigation.css';

import PageNavigator from './PageNavigator/PageNavigator';
import SiteNavigator from './SiteNavigator/SiteNavigator';

const Navigation = (props: any) => {
  return (
    <div className="navigation">
        <SiteNavigator/>
        <PageNavigator/>
    </div>
  );
}

export default Navigation;
