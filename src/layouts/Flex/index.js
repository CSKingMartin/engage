// flex.js
export const FlexChild = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classes = [
    'FlexChild',
    variant && `FlexChild--${variant}`,
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
    'Flex',
    variant && `Flex--${variant}`,
    className
  ];

  const classStack = classes.join(' ');

  return (
    <div className={classStack} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
