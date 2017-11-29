// @flow

import React from 'react';
import { shallow } from 'enzyme';
import SocialBadge from './socialbadge';

describe('SocialBadge', () => {
  test('renders without crashing', () => {
    shallow(<SocialBadge />);
  });
});
