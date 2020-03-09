import React from 'react';

export const Button = (props) => {
  const {
    className,
    href,
    variant,
    children,
    ...rest
  } = props;

  const classes = ['button', `button--${variant}`, className].join(' ');

  const Element = href ? 'a' : 'button';

  return (
    <Element href={href} className={classes} {...rest}>{children}</Element>
  );
};

Button.defaultProps = {
  variant: 'default'
};

export default Button;
