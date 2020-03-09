import React from 'react';

export const GlobalFooter = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classes = [
    'global-footer',
    className
  ].join(' ');

  return (
    <div className={classes} {...rest}>
      Made at home by Conner. See my code <a target="_blank" href="https://github.com/CSKingMartin/engage">here!</a>
    </div>
  );
};

export default GlobalFooter;
