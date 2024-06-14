import { FC, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ListingCardProps } from "./types";
import { putListing } from "../../../api/putListing";

export const ListingCard: FC<ListingCardProps> = ({ id, imageUrl, bedrooms, address, price, status }) => {
  const [localStatus, setLocalStatus] = useState<"active" | "expired">(status);

  const handleOnClick = async () => {
    try {
      await putListing({ id, status });
      setLocalStatus(localStatus === "active" ? "expired" : "active");
    } catch (err) {
      // @TODO: add toast component to render message to user
      console.error(`Failed to update the status of resrouce with id=${id}. ${err}`);
    }
  };

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
          {localStatus === "active" ? "Active" : "Expired"}
        </Card.Text>
        <div className="d-grid gap-2">
          <Button
            size="sm"
            style={{ backgroundColor: "#DBFF3B", borderColor: "#DBFF3B", color: "black", fontWeight: "bold" }}
            onClick={handleOnClick}
          >
            {status === "active" ? "Set as expired" : "Set as active"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
