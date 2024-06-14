export type Listing = {
  id: string;
  imageUrl: string;
  bedrooms: number;
  address: string;
  price: number;
  status: "active" | "expired";
};
