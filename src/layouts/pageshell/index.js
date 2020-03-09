import React, { useState, useEffect, createRef } from 'react';

import GlobalFooter from '@components/global-footer';
import GlobalHeader from '@components/global-header';

export const PageShell__footer = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classes = ['pageshell__footer', className].join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export const PageShell__header = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classes = ['pageshell__header', className].join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export const PageShell = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const mainRef = React.createRef();

  const testScroll = (value) => {
    if (value > 48) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    mainRef.current.addEventListener('scroll', (e) => {
      toggleScroll(testScroll(e.target.scrollTop));
    })
  }, []);

  const [isScrolled, toggleScroll] = useState(testScroll());

  const classes = ['pageshell', isScrolled ? 'is-scrolled' : '', className].join(' ');

  return (
    <div className={classes} {...rest}>
      <div className="pageshell__header">
        <GlobalHeader />
      </div>
      <div ref={mainRef} className="pageshell__main">
        {children}
      </div>
      <div className="pageshell__footer">
        <GlobalFooter />
      </div>
    </div>
  );
};

PageShell.Footer = PageShell__footer;
PageShell.Header = PageShell__header;

export default PageShell;
