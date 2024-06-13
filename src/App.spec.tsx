import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello world", async () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Hello World",
    })
  ).toBeVisible();
});
