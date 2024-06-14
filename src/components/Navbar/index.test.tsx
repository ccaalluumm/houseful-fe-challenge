import { render, screen } from "@testing-library/react";
import { Nav } from ".";

describe("Navbar", () => {
  it("should render", () => {
    render(<Nav />);

    expect(screen.getByText("React Houseful Frontend Challenge")).toBeInTheDocument();
    expect(screen.getByTestId("brand-image")).toBeInTheDocument();
  });
});
