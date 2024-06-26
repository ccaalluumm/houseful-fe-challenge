import { useEffect, useState } from "react";
import { getListings } from "../../../api/getListings";
import { Col, Container, Row } from "react-bootstrap";
import { ListingCard } from "../../Cards/ListingCard";
import { Listing } from "./types";

export const Listings = () => {
  const [listings, setListings] = useState<Listing[] | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listingsData = await getListings();

        const jsonData: Listing[] = await listingsData.json();

        setListings(jsonData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container fluid="md" data-testid="listings">
      <Row>
        {error && <p>{`Error: ${error.message}`}</p>}
        {loading && <p>Loading...</p>}
        {listings &&
          listings.map((listing) => (
            <Col style={{ marginBottom: "2rem" }} key={`${listing.id} - ${listing.address}`}>
              <ListingCard
                data-testid={`${listing.id} - ${listing.address}`}
                key={`${listing.id} - ${listing.address}`}
                id={listing.id}
                imageUrl={listing.imageUrl}
                bedrooms={listing.bedrooms}
                address={listing.address}
                price={listing.price}
                status={listing.status}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};
