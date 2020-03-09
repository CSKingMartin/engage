import React from 'react';

const Image = (props) => {
  const {
    variant,
    src,
    srcset,
    sizes,
    alt,
    classname
  } = props;

  const classes = [
    'image',
    { [`image--${variant}`]: variant },
    { [`${classname}`]: classname }
  ].join(' ');

  return <img className={classes} src={src} srcSet={srcset} alt={alt} sizes={sizes} />;
}

export default Image;
