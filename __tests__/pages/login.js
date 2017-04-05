import React from 'react';
import renderer from 'react-test-renderer';

import Login from '../../app/containers/pages/login/index';

describe('Login page', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <Login />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
