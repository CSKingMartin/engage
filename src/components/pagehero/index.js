import Wrapper from '@layouts/wrapper';

export const PageHero = (props) => {
  const {
    className,
    bkgImg,
    children,
    ...rest
  } = props;

  const classes = ['pagehero', className].join(' ');

  return (
    <div className={classes}>
      <Wrapper className="pagehero__inner" variant="wide" {...rest}>
        <div className="pagehero__primary is-blue has-white-text has-rhythm">
          {children}
        </div>
        <div
          className="pagehero__secondary"
          style={{ backgroundImage: `url(${bkgImg})` }}
        />
      </Wrapper>
    </div>
  );
};

export default PageHero;
