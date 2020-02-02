export const GlobalHeader = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classes = ['global-header', className].join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default GlobalHeader;
