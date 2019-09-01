import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

function loadStories() {
  const req = require.context('../app', true, /\.story\.tsx?$/);
  req.keys().forEach(story => req(story));
}

addDecorator(withKnobs({ escapeHTML: false }));

addParameters({
  panelPosition: 'right',
  viewport: {
    defaultViewport: 'iphone6p'
  }
});

configure(loadStories, module);
