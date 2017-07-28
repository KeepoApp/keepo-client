import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from '../../app/containers/pages/dashboard/index';

describe('Dashboard page', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <Dashboard />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
