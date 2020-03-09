import React from 'react';

import Flex from '@layouts/flex/'
import Heading from '@tags/heading';
import Image from '@tags/image';

export default { title: 'Flex container' };

import img1 from '@assets/images/home/flex-pic.jpeg';

export const pageshellTest = () => (
  <Flex>
    <Flex.Child>
      <Heading variant="h2">What is this?</Heading>
      <Heading variant="h3">We're getting married!</Heading>
      <p>
        After <em>three years</em> of will-they-won't-they, we have an answer. Mark your calendars for the big day!
        Coming soon to Lake Oswego, OR.
      </p>
    </Flex.Child>
    <Flex.Child>
      <Image src={img1} alt="test" />
    </Flex.Child>
  </Flex>
);
