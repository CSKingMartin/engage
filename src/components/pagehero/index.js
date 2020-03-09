import React, { useState } from 'react';
import Wrapper from '@layouts/wrapper';
import ReactResizeDetector from 'react-resize-detector';

export const PageHero = (props) => {
  const {
    className,
    bkgImgDesktop,
    bkgImgMobile,
    children,
    ...rest
  } = props;

  const classes = ['page-hero', className].join(' ');

  // const [backgroundImage, updateImage] = useState(bkgImgMobile);

  const styles = props.bkgImgDesktop ? { backgroundImage: `url(${bkgImgDesktop})` } : null;

  const onResize = (e) => {
    console.log(e);
  };

  return (
    <div className={classes}>
      <ReactResizeDetector handleWidth onResize={onResize} />
      <Wrapper variant="wide" style={styles} className="page-hero__container">
        <div className="page-hero__copy">
          {children}
        </div>
      </Wrapper>
    </div>
  );
};

export default PageHero;
