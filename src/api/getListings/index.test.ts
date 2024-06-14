import { describe, it, expect, vi } from "vitest";
import { getListings } from ".";

describe("getListings", () => {
  it("should return response when fetch is successful", async () => {
    const mockResponse: Partial<Response> = {
      ok: true,
      status: 200,
      json: vi.fn().mockResolvedValue([{ id: 1, title: "Listing 1" }]),
    };
    vi.spyOn(global, "fetch").mockResolvedValueOnce(mockResponse as Response);

    const response = await getListings();

    expect(response).toBe(mockResponse);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/listings");
  });

  it("should throw an error when fetch is unsuccessful", async () => {
    const mockResponse: Partial<Response> = {
      ok: false,
      status: 500,
    };

    vi.spyOn(global, "fetch").mockResolvedValueOnce(mockResponse as Response);

    await expect(getListings()).rejects.toThrow("HTTP error: Status 500");
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/listings");
  });
});
