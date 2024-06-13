import { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export type ListingCardProps = {
  image: string;
  bedrooms: number;
  address: string;
  price: number;
  status: "active" | "expired";
};

export const ListingCard: FC<ListingCardProps> = ({ image, bedrooms, address, price, status }) => {
  return (
    <Card style={{ width: "20rem" }} data-testid="listing-card" bg="light">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            minimumFractionDigits: 0, // Prevent displaying decimal places
            maximumFractionDigits: 0, // Prevent displaying decimal places
          }).format(price)}
        </Card.Title>
        <Card.Text>{address}</Card.Text>
        <Card.Text>
          <b>Bedrooms: </b>
          {bedrooms}
        </Card.Text>
        <Card.Text>
          <b>Status: </b>
          {status === "active" ? "Active" : "Expired"}
        </Card.Text>
        <div className="d-grid gap-2">
          <Button variant="primary" size="sm">
            {status === "active" ? "Set as expired" : "Set as active"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
