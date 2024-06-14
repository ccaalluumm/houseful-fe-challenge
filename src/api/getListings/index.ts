export const getListings = async () => {
  const response = await fetch("http://localhost:3000/listings");

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response;
};
