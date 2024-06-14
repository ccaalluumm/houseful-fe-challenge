import { putListing } from ".";
import { PutListingRequest } from "./types";

describe("putListing", () => {
  it("should return response when fetch is successful", async () => {
    const mockData: PutListingRequest = {
      id: "1",
      status: "active",
    };

    const mockResponse: Partial<Response> = {
      ok: true,
      status: 200,
      json: vi.fn().mockResolvedValue(mockData),
    };

    vi.spyOn(global, "fetch").mockResolvedValueOnce(mockResponse as Response);

    const response = await putListing(mockData as PutListingRequest);

    expect(response).toBe(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/listings/${mockData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mockData),
    });
  });

  it("should throw an error when fetch fails", async () => {
    // Mock data
    const mockData: PutListingRequest = {
      id: "1",
      status: "expired",
    };

    // Mock failed fetch response
    const mockResponse = {
      ok: false,
      status: 404,
    };

    vi.spyOn(global, "fetch").mockResolvedValueOnce(mockResponse as Response);

    await expect(putListing(mockData)).rejects.toThrow("HTTP error: Status 404");
    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/listings/${mockData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mockData),
    });
  });
});
