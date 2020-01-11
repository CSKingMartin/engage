// Heading/index.js

export const Heading = (props) => {
  const {
    tagName: Tag,
    children,
    ...rest
  } = props;

  return (
    <Tag {...rest}>{children}</Tag>
  );
};

Heading.defaultProps = {
  tagName: 'h1'
};

export default Heading;
