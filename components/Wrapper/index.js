// index.js
export const Wrapper = (props) => {
  const {
    children,
    className,
    ...rest
  } = props;

  const classes = [
    'Wrapper',
    className
  ];

  const classStack = classes.join(' ');

  return (
    <div className={classStack} {...rest}>{children}</div>
  );
};

export default Wrapper;
