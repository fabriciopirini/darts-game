import React from 'react';
import { render } from '@testing-library/react';
import Player from '../Player';

test('renders a player', () => {
  const { container } = render(<Player />);
  console.log(container);
  
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
