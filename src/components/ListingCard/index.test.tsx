import { render } from "@testing-library/react";
import { ListingCard, ListingCardProps } from ".";

const testProps: ListingCardProps = {
  image: "/assets/images/house1.png",
  bedrooms: 10,
  address: "Frognal, Hampstead, London NW3",
  price: 1000000,
  status: "active",
};

describe("ListingCard", () => {
  it("should accept property information and render it", () => {
    // Arrange
    const { getByTestId, getByText, queryByText } = render(
      <ListingCard
        image={testProps.image}
        bedrooms={testProps.bedrooms}
        address={testProps.address}
        price={testProps.price}
        status={testProps.status}
      />,
    );

    // Assert
    expect(getByTestId("listing-card")).toBeTruthy();
    expect(getByText("Active"));
    expect(getByText("£1,000,000"));
    expect(getByText("Frognal, Hampstead, London NW3"));
    expect(queryByText("Bedrooms: 6"));
  });
});
