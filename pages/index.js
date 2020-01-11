// index.js

import Flex, { FlexChild } from '@layouts/Flex';
import Heading from '@tags/Heading';
import Nup from '@layouts/Nup';
import Wrapper from '@layouts/Wrapper';

import img1 from '@assets/images/timeline/2014/2014_1.jpg';
import img2 from '@assets/images/timeline/2014/2014_2.jpg';
import img3 from '@assets/images/timeline/2014/2014_3.jpg';
import img4 from '@assets/images/timeline/2014/2014_4.jpg';
import img5 from '@assets/images/timeline/2014/2014_5.jpg';

export const Page = () => {
  return (
    <div>
      <Wrapper className="has-rhythm">
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
      <Wrapper variant="wide">
      <Flex>
        <FlexChild className="has-rhythm is-sticky" variant="small">
          <Heading tagName="h3">The quick brown fox jumped over the lazy dog.</Heading>
          <Heading tagName="h6">The quick brown fox jumped over the lazy dog.</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </FlexChild>

        <FlexChild variant="large">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
        </FlexChild>
      </Flex>
      </Wrapper>
    </div>
  );
};

export default Page;
