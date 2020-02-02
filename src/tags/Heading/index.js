// Heading/index.js

export const Heading = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
    ...rest
  } = props;

  const classes = ['heading', `heading--${variant}`, className].join(' ');

  return (
    <Tag className={classes} {...rest}>{children}</Tag>
  );
};

Heading.defaultProps = {
  tagName: 'h1',
  variant: 'h1'
};

export default Heading;
