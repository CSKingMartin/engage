import Button from '@tags/button';
import Heading from '@tags/heading';
import Wrapper from '@layouts/wrapper';

export const SayCongrats = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  return (
    <div className="say-congrats" {...rest}>
      <Wrapper className="has-rhythm">
        <Heading variant="h2">Want to reach out?</Heading>
        <p>Use the button below to send an email to us!</p>

        <Button href="mailto:wells.parsley.wedding@gmail.com">
          Say congrats!
        </Button>
      </Wrapper>
    </div>
  );
};

export default SayCongrats;
