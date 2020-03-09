import React from 'react';

import Wrapper from '@layouts/wrapper';

export const FlexChild = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = [
    'flex__child',
    variant && `flex__child--${variant}`,
    'has-rhythm',
    className
  ];

  const classStack = classes.join(' ');

  return (
    <div className={classStack} {...rest}>
      {children}
    </div>
  );
};

export const Flex = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = [
    'flex',
    variant && `flex--${variant}`,
    className
  ];

  const classStack = classes.join(' ');

  return (
    <div className={classStack} {...rest}>
      <Wrapper variant="widest" className="flex__inner">
        {children}
      </Wrapper>
    </div>
  );
};

Flex.Child = FlexChild;

export default Flex;
