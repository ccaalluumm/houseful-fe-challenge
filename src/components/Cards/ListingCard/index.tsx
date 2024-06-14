import { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ListingCardProps } from "./types";

export const ListingCard: FC<ListingCardProps> = ({ id, imageUrl, bedrooms, address, price, status, onClick }) => {
  return (
    <Card style={{ width: "20rem", height: "460px", margin: "auto" }} data-testid="listing-card" bg="light">
      <Card.Img variant="top" src={imageUrl} />
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
          <Button
            size="sm"
            style={{ backgroundColor: "#DBFF3B", borderColor: "#DBFF3B", color: "black", fontWeight: "bold" }}
            onClick={() => onClick({ id, status: status === "active" ? "expired" : "active" })}
          >
            {status === "active" ? "Set as expired" : "Set as active"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
