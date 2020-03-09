import React from 'react';

export const Wrapper = (props) => {
  const {
    variant,
    children,
    className,
    ...rest
  } = props;

  const classes = [
    'wrapper',
    variant && `wrapper--${variant}`,
    className
  ];

  const classStack = classes.join(' ');

  return (
    <div className={classStack} {...rest}>{children}</div>
  );
};

export default Wrapper;
