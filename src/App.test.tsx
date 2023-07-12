import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement: HTMLAnchorElement = screen.getByTestId("learn-link");
  expect(linkElement.href).toContain("ultimateqa.com");
});

test("url is correct", () => {
  render(<App />);
  const linkElement: HTMLAnchorElement = screen.getByTestId("learn-link");
  expect(linkElement.href).toContain("https://ultimateqa.com");
});
