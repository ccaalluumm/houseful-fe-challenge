import { render, screen } from "@testing-library/react";
import App from "./App";

test("App", async () => {
  render(<App />);

  expect(screen.getByTestId("nav")).toBeVisible();
  expect(screen.getByTestId("listings")).toBeVisible();
});
