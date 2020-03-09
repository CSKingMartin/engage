import { configure } from '@storybook/react';

import '../src/index.css';

configure(require.context('../stories', true, /\.stories\.js$/), module);
