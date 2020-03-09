// index.js
// import fetch from 'isomorphic-unfetch';

import Button from '@tags/button';
import ComplexMap from '@components/complex-map';
import Flex, { FlexChild } from '@layouts/flex';
import GlobalHeader from '@components/global-header';
import Heading from '@tags/heading';
import Icon from '@tags/icon';
import Image from '@tags/image';
import Nup from '@layouts/Nup';
import PageHero from '@components/pagehero'
import PageShell from '@layouts/pageshell';
import SayCongrats from '@components/say-congrats';
import Wrapper from '@layouts/wrapper';

import img1 from '@assets/images/home/flex-pic.jpeg';
// import img2 from '@assets/images/timeline/2014/2014_2.jpg';
// import img3 from '@assets/images/timeline/2014/2014_3.jpg';
// import img4 from '@assets/images/timeline/2014/2014_4.jpg';
// import img5 from '@assets/images/timeline/2014/2014_5.jpg';

import background from '@assets/images/home/hero-mobile.jpeg';

export const Page = () => {
  const target = new Date('09/20/20');

  const now = new Date();

  const distance = target - now;

  const time = Math.floor(distance / (1000 * 60 * 60 * 24));

  return (
    <PageShell>
      <PageHero bkgImgDesktop={background}>
        <Heading variant="h2">
          In <span className="text-jumbo">{time}</span> days:
        </Heading>
        <Heading variant="h3">Conner and Carlee say goodbye to hedonism and debauchery</Heading>
      </PageHero>
      <Flex>
        <Flex.Child>
          <Image src={img1} alt="test" />
        </Flex.Child>
        <Flex.Child>
          <Heading variant="h2">What is this?</Heading>
          <Heading variant="h3">We're getting married!</Heading>
          <p>After <em>three years</em> of will-they-won't-they, we have an answer.</p>
          <p>Mark your calendars for the big day, <strong>September 20th, 2020</strong>,
          and check back here periodically for more updates going forward.</p>
          <p>Coming soon to Lake Oswego, OR.</p>
        </Flex.Child>
      </Flex>

      <SayCongrats />

      <PageShell.Footer>
        {/*<GlobalFooter />*/}
      </PageShell.Footer>
    </PageShell>
  );
};

export default Page;
