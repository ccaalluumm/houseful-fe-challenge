import { PutListingRequest } from "../../../api/putListing/types";

export type ListingCardProps = {
  id: string;
  imageUrl: string;
  bedrooms: number;
  address: string;
  price: number;
  status: "active" | "expired";
  onClick: ({ id, status }: PutListingRequest) => void;
};
