import React from 'react';
// import svg from '@assets/svg/sprite.css.svg';

const Icon = (props) => {
  const {
    name,
    id,
    title,
    description,
    className,
    children,
    ...rest
  } = props;

  const classes = ['icon', className].join(' ');

  return (
    <svg name={name} title={title} className={classes} {...rest}>
      {title && <title id={`${id}-title`}>{title}</title>}
      {description && <description id={`${id}-desc`}>{description}</description>}
      {name && <use xlinkHref={`#static--assets--icons--${name}`} />}
      {children}
    </svg>
  );
};

export default Icon;
