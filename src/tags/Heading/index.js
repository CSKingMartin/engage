import React from 'react';

export const Heading = (props) => {
  const {
    tagName,
    className,
    variant,
    children,
    ...rest
  } = props;

  const Element = tagName || variant || 'h1';

  const classes = ['heading', `heading--${variant}`, className].join(' ');

  return (
    <Element className={classes} {...rest}>{children}</Element>
  );
};

Heading.defaultProps = {
  variant: 'h1'
};

export default Heading;
