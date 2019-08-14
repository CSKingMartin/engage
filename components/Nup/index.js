export const Nup = (props) => {
  const {
    variant,
    className,
    children
  } = props;

  const classes = [
    'Nup',
    `Nup--${variant}`,
    'Nup--gutter-default',
    className
  ];

  const classStack = classes.join(' ');

  return (
    <div className={classStack}>{children}</div>
  );
};

export default Nup;
