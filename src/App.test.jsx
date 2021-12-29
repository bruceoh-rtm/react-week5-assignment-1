import { render } from '@testing-library/react';

import App from './App';

// App test

jest.mock('react-redux');

describe('App', () => {
  const renderApp = () => render((<App />));

  it('sets restaurants', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('레스토랑');
  });
});
