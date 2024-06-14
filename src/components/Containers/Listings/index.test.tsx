import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import { Listings } from ".";

const mockListings = [
  {
    id: "1",
    image: "/assets/images/house1.png",
    bedrooms: 6,
    address: "Frognal, Hampstead, London NW3",
    price: 10950000,
    status: "expired",
  },
  {
    id: "2",
    image: "/assets/images/house2.png",
    bedrooms: 3,
    address: "Eaton Terrace, London SW1W",
    price: 775000,
    status: "expired",
  },
];

describe("Listings", () => {
  it("should render an error message if the api returns an error", async () => {
    // Arrange
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {}); // spy on console to prevent test suite output pollution
    const mockError = new Error("Failed to fetch listings");
    vi.spyOn(global, "fetch").mockRejectedValueOnce(mockError);
    // Act
    render(<Listings />);
    // Assert
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText("Error: Failed to fetch listings")).toBeInTheDocument();
    });
    consoleErrorSpy.mockRestore();
  });

  it("should render listings if the api successfully returns", async () => {
    const mockResponse: Partial<Response> = { ok: true, json: () => Promise.resolve(mockListings) };
    vi.spyOn(global, "fetch").mockResolvedValueOnce(mockResponse as Response);
    // Act
    render(<Listings />);
    // Assert
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText("Error: Failed to fetch listings")).not.toBeInTheDocument();
      expect(screen.getByText("Frognal, Hampstead, London NW3")).toBeInTheDocument();
      expect(screen.getByText("Eaton Terrace, London SW1W")).toBeInTheDocument();
    });
  });
  // @TODO: test the onClick callback
});
