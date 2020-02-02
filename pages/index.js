// index.js
// import fetch from 'isomorphic-unfetch';

import Flex, { FlexChild } from '@layouts/Flex';
import Heading from '@tags/Heading';
import Nup from '@layouts/Nup';
import PageHero from '@components/pagehero'
import Wrapper from '@layouts/Wrapper';

import img1 from '@assets/images/timeline/2014/2014_1.jpg';
import img2 from '@assets/images/timeline/2014/2014_2.jpg';
import img3 from '@assets/images/timeline/2014/2014_3.jpg';
import img4 from '@assets/images/timeline/2014/2014_4.jpg';
import img5 from '@assets/images/timeline/2014/2014_5.jpg';

import background from '@assets/images/home/engage-hero.jpeg';

export const Page = () => {
  const target = new Date('09/20/20');

  const now = new Date();

  const distance = target - now;

  const time = Math.floor(distance / (1000 * 60 * 60 * 24));

  console.log(time);

  return (
    <div>
      <PageHero bkgImg={background}>
        <Heading>
          Countdown:
          <br/>
          <span className="text-jumbo">
            {time}
          </span>
          <br />
          <span className="heading--h2">days until...</span>
        </Heading>
        <p>
          Carlee Parsley and Conner Wells say goodbye to their lives of hedonism and debauchery to settle down together.
        </p>
      </PageHero>
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
      </Flex>
      </Wrapper>
    </div>
  );
};

export default Page;
