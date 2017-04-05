import React from 'react';
import renderer from 'react-test-renderer';

import Session from '../../app/containers/pages/session/index';

describe('Session page', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <Session />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
