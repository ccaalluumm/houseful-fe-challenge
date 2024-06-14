import { PutListingRequest } from "./types";

export const putListing = async (data: PutListingRequest) => {
  const response = await fetch(`http://localhost:3000/listings/${data.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response;
};
