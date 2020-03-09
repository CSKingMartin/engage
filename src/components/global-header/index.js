import React from 'react';

import Button from '@tags/button';
import Icon from '@tags/icon';
import GlobalNavigation from '@components/global-navigation';
import Wrapper from '@layouts/wrapper';

export const GlobalHeader = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classes = [
    'global-header',
    className
  ].join(' ');

  return (
    <div className={classes} {...rest}>
      <Wrapper variant="wide">
        <button className="global-header__home">
          <Icon name="parsley"/>
          <div className="global-header__home-labelwrapper">
            <div>September 20th, 2020</div>
          </div>
        </button>
        <GlobalNavigation />
      </Wrapper>
    </div>
  );
};

export default GlobalHeader;
