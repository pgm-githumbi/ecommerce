// import React from 'react';
import { render, screen } from "@testing-library/react";
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from "./App";

test("renders learn react link", () => {
  // const { getByText } = render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // );
  // expect(getByText(/learn/i)).toBeInTheDocument();
  test("renders project name", () => {
    render(<App />);
    const linkElement = screen.getByText(/s/i);

    expect(linkElement).toBeInTheDocument();
  });
});
