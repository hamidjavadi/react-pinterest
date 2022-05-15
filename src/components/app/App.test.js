import { render, screen } from "@testing-library/react";
import App from "./app";

test("Render Title", () => {
  render(<App />);
  const title = screen.getByTestId(/title/i);
  expect(title).toHaveTextContent("Pinterest");
});
