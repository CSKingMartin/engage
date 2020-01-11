// index.js
export const Wrapper = (props) => {
  const {
    variant,
    children,
    className,
    ...rest
  } = props;

  const classes = [
    'Wrapper',
    variant && `Wrapper--${variant}`,
    className
  ];

  const classStack = classes.join(' ');

  return (
    <div className={classStack} {...rest}>{children}</div>
  );
};

export default Wrapper;
