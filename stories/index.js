import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Hello from './test';

storiesOf('Welcome', module)
  .add('to Storybook', () => (<Hello />));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ));
