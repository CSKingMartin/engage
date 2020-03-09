import React from 'react';

import Icon from '@tags/icon';

const ComplexMap = (props) => {
  const {
    className,
    ...rest
  } = props;

  const classes = ['complex-map', className].join(' ');

  return (
    <div className={classes} {...rest}>
      <div className="complex-map__states">
        <div className="west">
          <Icon name="wa" />
          <Icon name="or" />
        </div>
        <div>
          <Icon name="id" />
        </div>
      </div>
    </div>
  );
};

export default ComplexMap;
