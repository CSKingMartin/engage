// index.js

import Heading from '@components/Heading';
import Nup from '@components/Nup';
import Wrapper from '@components/Wrapper';

export const Page = () => {
  return (
    <Wrapper>
      <Heading>The quick brown fox jumped over the lazy dog.</Heading>
      <Heading tagName="h2">The quick brown fox jumped over the lazy dog.</Heading>
      <Heading tagName="h3">The quick brown fox jumped over the lazy dog.</Heading>
      <Heading tagName="h4">The quick brown fox jumped over the lazy dog.</Heading>
      <Heading tagName="h5">The quick brown fox jumped over the lazy dog.</Heading>
      <Heading tagName="h6">The quick brown fox jumped over the lazy dog.</Heading>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <Nup variant="four">
        <span className="is-pink" style={{ minHeight: '200px' }} />
        <span className="is-light-blue" style={{ minHeight: '200px' }} />
        <span className="is-blue" style={{ minHeight: '200px' }} />
        <span className="is-red" style={{ minHeight: '200px' }} />
      </Nup>
    </Wrapper>
  );
};

export default Page;
